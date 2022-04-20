import {Fragment} from 'react'
import AvailableMeals from "./AvailableMeals"
import MealSummary from "./MealsSummary"


const Meals =()=>{
return(
    <Fragment>
        <AvailableMeals/>
        <MealSummary/>
    </Fragment>
)
}

export default Meals