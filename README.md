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

## Demostración del sitio

![demostracion del titulo](/public/images/navegacionSitio.gif)

## Rutas

La ruta inicial '/' se puede ver todos los productos del sitio. Cada producto tiene su card con imagen, nombre del producto, precio, y un contador.

- **ItemListContainer:** Componente donde se muestran todos los productos. Tambien se puede filtrar por categoria con la ruta '/categoria/:categoriaId'

- **ItemList:** Componente que recibe los datos del itemListContainer y a traves de un map genera los componentes Item.

- **Item:** Componente en el que se visualiza la card de cada producto y sus datos recibidos del ItemList. Tambien contiene el link para ver el detalle del mismo y el ItemCount para sumar unidades del producto.

La ruta '/detail/:productoId' nos permite ir al detalle del producto seleccionado en el ItemListContainer. Donde podemos encontrar la imagen, nombre, descripcion y precio del producto.

- **ItemDetailContainer:** Componente donde se visualiza el componente ItemDetail al cual le pasamos los datos en las props.

- **ItemDetail:** Componente que muestra el detalle del producto.
