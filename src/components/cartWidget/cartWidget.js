import Cart from './assets/cart3.png'
import './cartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartDiv'>
            <img className='cart' src={Cart} alt='cart-widget' />
            0
        </div>
    )
}

export default CartWidget