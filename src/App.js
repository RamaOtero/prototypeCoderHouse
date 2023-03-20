
import './App.css';
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {
  return (
    <div>
       <NavBar />
       <ItemListContainer greeting={'NEW ARRIVAL'} />
    </div>
    
  );
}

export default App;
