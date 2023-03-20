import CartWidget from "../cartWidget/cartWidget"
import Logo from './asset/logo.png'
import './navBar.css'

const navBar = () => {
    return (
    <nav>
      <div className="navBack">
        <div className="logoDiv">
          <img className="logo" alt="logo" src={Logo} />
          <h1 className="logoName" > PROTOTYPE </h1>
          <CartWidget />
        </div>
        <div className="bttnDiv">
          <button className="bttn">INICIO</button>
          <button className="bttn">TIENDA</button>
          <button className="bttn">NEW ARRIVAL</button>
          <button className="bttn">NOSOTROS</button>
          <button className="bttn">CONTACTO</button>
        </div>
      </div>
    </nav>

    )
}

    export default navBar