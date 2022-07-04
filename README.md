# Ecommerce

El proyecto es un sitio web de una tienda de ropa

## Instalación git clone

Para realizar la clonacion del proyecto, ejecutar en la consola:

```
 git clone https://github.com/AugustoSilva9/ecommerce-React-Coder.git
```

y ejecutar:

```
 npm install
 npm start
```

## Variables de Entorno

Para poder correr este proyecto es necesario configurar las variables de entorno, la cuales son las credenciales de la base de datos Firebase. Ejemplo en .env.example

## Demostración del sitio

![demostracion del titulo](/public/images/navegacionSitio.gif)

## Rutas

La ruta inicial '/' se puede ver todos los productos del sitio. Cada producto tiene su card con imagen, nombre del producto, precio, y un contador.

- **ItemListContainer:** Componente donde se muestran todos los productos. Tambien se puede filtrar por categoria con la ruta '/categoria/:categoriaId'

- **ItemList:** Componente que recibe los datos del itemListContainer y a traves de un map genera los componentes Item.

- **Item:** Componente en el que se visualiza la card de cada producto y sus datos recibidos del ItemList. Tambien contiene el link para ver el detalle del mismo.

La ruta '/detail/:productoId' nos permite ir al detalle del producto seleccionado en el ItemListContainer. Donde podemos encontrar la imagen, nombre, descripcion, precio del producto y el ItemCount para sumar unidades del producto.

- **ItemDetailContainer:** Componente donde se visualiza el componente ItemDetail al cual le pasamos los datos en las props.

- **ItemDetail:** Componente que muestra el detalle del producto y el ItemCount para sumar unidades del producto, una vez que agregamos los productos al carrito se muestra un link para ir al carrito.

La ruta '/cart' se muestran todos los productos que se agregaron al carrito en caso de no haber productos en el carrito muestra un texto que el carrito esta vacio y un boton que redirecciona a la ruta inicial. Con un click en el boton finalizar compra se muestra un formulario para rellenar los datos del comprador para luego agregarlos a la orden que se genera cuando se finaliza la compra. Tambien esta el boton para limpiar el carrito.

- **CartContainer:** Componente que muestra los datos del producto agregado al carrito la cantidad, el valor unitario y le valor total, tambien hay un boton para eliminar este producto del carrito. Recibe por props los datos del producto agregado al carrito.

- **NavBar:** Contiene el logo, se puede navegar por las diferentes categorias de productos, y contiene el CartWidget que se muestra solamente si hay productos en el carrito.

- **CartWidget:** Muestra el icono del carrito y la cantidad de productos que hay en el carrito si hacemos click nos direcciona al carrito.
