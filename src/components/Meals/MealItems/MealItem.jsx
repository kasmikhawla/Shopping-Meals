import { useContext } from 'react'
import './MealItem.scss'
import MealItemForm from './MealItemForm'
import CartContext from '../../Store/Cart-Context'

const MealItem =props=>{
    const cardCx = useContext(CartContext)

    const addItemToCartHAndler = amount =>{
        cardCx.addItem({
            id:props.id,
            name:props.name,
            amount : amount,
            price : props.price
        })
    }

    const price = `$${props.price.toFixed(2)}`
    return(
        <li className="meal">
            <div><h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            <div className="price">{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addItemToCartHAndler}/>
            </div>
        </li>
    )
}

export default MealItem