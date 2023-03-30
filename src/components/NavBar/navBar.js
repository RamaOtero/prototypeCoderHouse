import CartWidget from "../cartWidget/cartWidget"
import Logo from './assets/Logo2.png'
import Button from './Button/Button'
import './navBar.css'
import { Link } from "react-router-dom";

const navBar = () => { 
  return (
    <nav>
      <div className="navBack">
        <div className="logoDiv">
        <Link to="/"> <img className="logo" alt="logo" src={Logo} /> </Link>
          <h1 className="logoName" > PROTOTYPE </h1>
          <CartWidget />
        </div>
        <div className="bttnDiv">
        <Link to="/"> <Button label='Home' /> </Link>
        <Link to="/NewArrival"> <Button label='New Arrival' /> </Link> 
        <Link to="/Contact"> <Button label='Contact' /> </Link> 
        <Link to="/About Us"> <Button label='About Us' /> </Link> 
        </div>
      </div>
    </nav>

  )
}

export default navBar