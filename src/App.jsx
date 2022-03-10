import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/navBar/ItemListContainer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  const tutora = "Rocio"
  const card = "Producto"
  return (
    <div className="container">
          <NavBar />
          <ItemListContainer tutora={tutora} card={card}/>
    </div>

    
  );
}

export default App;
