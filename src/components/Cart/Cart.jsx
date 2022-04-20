import { useContext } from 'react'
import './Cart.scss'
import Modal from '../UI/Modal'
import CartContext from '../Store/Cart-Context'
import CartItem from './CartItem'

const Cart =props =>{
    const cartCx = useContext(CartContext)
    
    const totalAmount = `$${cartCx.totalAmount.toFixed(2)}`
    
    const hasItem = cartCx.items.length > 0

    const cartItemRemoeHandler =id =>{
        cartCx.removeItem(id)
    }
    const cartItemAddHandler = item =>{
        cartCx.addItem({...item,amount:1})
    }

    const cartItem=<ul className="cart-items">{cartCx.items.map((item)=>
            <CartItem key={item.id} name={item.name} amount = {item.amount} price={item.price} 
            onRemove={cartItemRemoeHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)} />)}</ul>

        return <Modal onClose={props.onClose}>
            {cartItem}
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                {hasItem && <button className="button">Order</button>}
            </div>
        </Modal>

}

export default Cart 