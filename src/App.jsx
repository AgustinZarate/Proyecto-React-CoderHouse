import './App.css';
import NavBar from './components/navBar/NavBar';
import ListItemContainer from './components/main/ListItemContainer';

function App() {
  return (
    <div className="container">
          <NavBar />
          <ListItemContainer persona="Rocio"/>
    </div>

    
  );
}

export default App;
