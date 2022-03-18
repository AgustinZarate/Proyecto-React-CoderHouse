import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Card from './components/Card';

function App() {
  const tutora = "Rocio";
  return (
    <div className="container">
          <NavBar />
          <ItemListContainer tutora={tutora}/>
          
    </div>
  );
}

export default App;
