const productos = [
    {
        id: '1',
        nombre: 'Remera',
        precio: 1200,
        img: 'https://essential.vteximg.com.br/arquivos/ids/558789-454-423/962-3334_1.jpg?v=637883197890030000',
        stock: 5,
    },
    {
        id: '2',
        nombre: 'Gorra',
        precio: 1500,
        img: 'https://essential.vteximg.com.br/arquivos/ids/529727-454-423/934-0279_1.jpg?v=637822540818230000',
        stock: 3,
    },
    {
        id: '3',
        nombre: 'Short',
        precio: 2500,
        img: 'https://essential.vteximg.com.br/arquivos/ids/432383-454-423/266-1118_1.jpg?v=637577372327900000',
        stock: 2,
    }
]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}