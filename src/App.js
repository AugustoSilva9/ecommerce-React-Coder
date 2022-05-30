/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import ItemCount from './components/ItemCount/ItemCount'; */

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola mundo!!" />
      {/* <ItemCount stock={5} initial={0} /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
