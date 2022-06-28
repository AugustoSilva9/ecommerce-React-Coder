import ItemList from "../ItemList/ItemList"
import { useState ,  useEffect } from "react"
/* import { getProductos } from "../../asyncmock"; */
/* import { getProductosByCategoria } from "../../asyncmock"; */
import { useParams } from "react-router-dom"
import "../Item/Item.css"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemListContainer = (props) => {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();


    useEffect(() => {
        setLoading(true)

        const collectionRef = categoriaId 
            ? query(collection(db, 'productos'), where('categoria', '==', categoriaId )) 
            :collection(db, 'productos');
            
        getDocs(collectionRef).then(response => {
            const productos = response.docs.map(doc => {
                return{ id: doc.id, ...doc.data() }
            })
            setProductos(productos)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        /* if(!categoriaId){
            getProductos().then(response => {
                setProductos(response)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductosByCategoria(categoriaId).then(response => {
                setProductos(response)
            }).finally(() => {
                setLoading(false)
            })
        } */
    },  [categoriaId])
   
    if(loading){
        return(<div class="spinner"></div>)
    }
   
    return (
        <div>
            <h1>{categoriaId ? categoriaId : "Nuestros Productos"}</h1>
            <ItemList prod={productos} />
        </div>
    )
}

export default ItemListContainer