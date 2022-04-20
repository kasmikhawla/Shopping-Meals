import './AvailableMeals.scss'
import Card from '../UI/card'
import MealItem from '../Meals/MealItems/MealItem'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals =()=>{
    const mealList = DUMMY_MEALS.map(meal =><MealItem key={meal.id} 
      name={meal.name} 
      id={meal.id}
      price={meal.price} 
      description={meal.description}/>);
return(
    <section className="meals">
        <Card> <ul>{mealList}</ul></Card>
    </section>
)
}
export default AvailableMeals