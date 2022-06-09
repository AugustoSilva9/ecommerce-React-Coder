import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext'


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting="Hola mundo!!" />} />
            <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Productos por Categoria" />} />
            <Route path='/cart' element={ <Cart title="Carrito de compras" /> } />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
