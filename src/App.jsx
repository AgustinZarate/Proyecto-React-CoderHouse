import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Card from './components/card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';


function App() {
  const tutora = "Rocio";
  return (
    <BrowserRouter>
    <div className="container">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer tutora={tutora}/>} />
            <Route path='/nosotros' element={<Nosotros />} />
          </Routes>
          
    </div>
    </BrowserRouter>
  );
}

export default App;
