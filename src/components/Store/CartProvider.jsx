import { useReducer } from "react"
import CartContext from "./Cart-Context"

const defaultCartState= {
    items:[],
    totalAmount:0
}
const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatetotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(item=>item.id === action.item.id)
        const existingItem = state.items[existingCartItemIndex]
        let updatedItem
        let updatedItems
        if(existingItem ){
            updatedItem ={
                ...existingItem,
                amount:existingItem.amount + action.item.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]= updatedItem
        }
        else{
             updatedItems = state.items.concat(action.item)
        }

       
       
        return {
            items : updatedItems,
            totalAmount : updatetotalAmount
        }
    }

    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.id)
        const existingItem = state.items[existingCartItemIndex]
        const updatetotalAmount = state.totalAmount - existingItem.price
        let updatedItems
        if(existingItem.amount === 1){
            updatedItems=state.items.filter(item => item.id !== action.id)
        }
        else{
           const updatedItem={...existingItem,amount :existingItem.amount -1}
           updatedItems = [...state.items]
           updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items : updatedItems,
            totalAmount : updatetotalAmount
        }
    }

return defaultCartState
}
const CartProvider = props =>{
   const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)

    const addItemToCartHAndler=item=>{
        dispatchCartAction({type:'ADD', item:item})

    }
    const removeItemfromCartHandler=id=>{
        dispatchCartAction({type:'REMOVE', id:id})
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHAndler,
        removeItem:removeItemfromCartHandler
    }
return <CartContext.Provider value={cartContext}>
         {props.children}
       </CartContext.Provider>
}

export default CartProvider