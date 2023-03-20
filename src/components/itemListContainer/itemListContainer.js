
import './itemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='greetingDiv'>
            <h1 className='greeting'>
                {greeting}
            </h1>
        </div>
    )
}

export default ItemListContainer