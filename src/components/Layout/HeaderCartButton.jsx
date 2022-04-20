import { useContext ,useState , useEffect} from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../Store/Cart-Context'
import classes from './HeaderCartButton.scss'


const HeaderCartButton =props=>{
    
    const [btnIsHighlighted,setbtnIsHighlighted]=useState(false)
    const cartcx = useContext(CartContext)
    const numberofcartItems = cartcx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount 
    },0)

    const btnclasses = `${"button"} ${btnIsHighlighted ? "bump" : ''}`
    const {items} = cartcx

useEffect(()=>{ 
    if(items.length === 0){
        return
    }
    setbtnIsHighlighted(true)

    const timer = setTimeout(()=>{setbtnIsHighlighted(false)},300)

    return ()=> clearTimeout(timer)
    
   },[items])


    return(
        <button className= {btnclasses} onClick={props.onClick} >
            <span className='icon'>
                <CartIcon /> 
            </span>
            <span>
                Your Cart
            </span>
            <span className="badge">{numberofcartItems}</span>
        </button>
    )
    
}


export default HeaderCartButton