
import './App.css';
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {
  return (
    <div>
       <NavBar />
       <ItemListContainer greeting={'Bienvenidos a mi ecommerce'} />
    </div>
    
  );
}

export default App;
