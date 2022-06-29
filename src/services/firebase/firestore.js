import { db } from ".";
import { getDocs, collection, query, where } from "firebase/firestore"; 

export const getProductos = (categoriaId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoriaId 
            ? query(collection(db, 'productos'), where('categoria', '==', categoriaId )) 
            :collection(db, 'productos');
        
        getDocs(collectionRef).then(response => {
            const productos = response.docs.map(doc => {
                return{ id: doc.id, ...doc.data() }
            })
            resolve(productos)
        }).catch(error => {
            reject(error)
        })
    })
}  

export const getNavBar = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(db, 'categorias')).then(response => {
            const categorias = response.docs.map(doc => {
                return {id: doc.id }
            })
            resolve(categorias)
        }).catch(error => {
            reject(error)
        })
    })
}