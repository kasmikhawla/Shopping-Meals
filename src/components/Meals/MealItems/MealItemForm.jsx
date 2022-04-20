import { useRef ,useState} from 'react'
import './MealItemForm.scss'
import Input from '../../UI/Input/Input'

const MealItemForm = props => {
    const [amountISValid , setAmountISValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = event =>{
        event.preventDefault()
        const entredAmount = amountInputRef.current.value
        const entredAmountNumber = +entredAmount

        if(entredAmount.trim().length === 0 || entredAmountNumber < 1 || entredAmountNumber > 5){
            setAmountISValid(false)
            return
        }
        props.onAddToCart(entredAmountNumber)
    }
    return (
    <form className="form" onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
        {!amountISValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
    )
}

export default MealItemForm