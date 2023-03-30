import CartWidget from "../cartWidget/cartWidget"
import Logo from './assets/Logo2.png'
import Button from './Button/Button'
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
          <Button label='Home' />
          <Button label='New Arrival' />
          <Button label='Contact' />
          <Button label='About Us' />
        </div>
      </div>
    </nav>

  )
}

export default navBar