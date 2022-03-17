import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Card from './components/Card';
import promise from './components/promise';

function App() {
  const tutora = "Rocio";
  const Producto = "Producto";
  const pokeballs = [
    {
      "nombre": "Pokeball",
      "imagen": "img/pokeball.png",
      "precio": 100,
      "stock": 15,
      "descipsion": "Es la básica, puedes coger a cualquier Pokémon."
    },
    {
      "nombre": "Superball",
      "imagen": "img/superball.png",
      "precio": 250,
      "stock": 10,
      "descipsion": "Tendrás más posibilidades de atraparlos que con la simple Poké Ball."
    },
    {
      "nombre": "Ultraball",
      "imagen": "img/ultraball.png",
      "precio": 500,
      "stock": 5,
      "descipsion": "Tendrás más posibilidades de atraparlos que con la Superball."
    }
  ]
  return (
    <div className="container">
          <NavBar />
          <ItemListContainer tutora={tutora} Producto={Producto}/>
          <div className='container-cards'> {/* Para usar grid de bootstrap, colocar el col en Card.jsx y el Row en App.jsx */}
          <Card nombre={pokeballs[0].nombre} imagen={pokeballs[0].imagen} precio={pokeballs[0].precio} stock={pokeballs[0].stock} descipsion={pokeballs[0].descipsion}/>
          <Card nombre={pokeballs[1].nombre} imagen={pokeballs[1].imagen} precio={pokeballs[1].precio} stock={pokeballs[1].stock} descipsion={pokeballs[1].descipsion}/>
          <Card nombre={pokeballs[2].nombre} imagen={pokeballs[2].imagen} precio={pokeballs[2].precio} stock={pokeballs[2].stock} descipsion={pokeballs[2].descipsion}/>
          </div>
          
    </div>
  );
}

export default App;
