import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch('https://react-meals-f5e37-default-rtdb.firebaseio.com/meals.json');
      const responseDate = await response.json();

      const loadedMeals = [];

      for (const key in responseDate) {
        loadedMeals.push({
          id: key,
          name: responseDate[key].name,
          description: responseDate[key].description,
          price: responseDate[key].price
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false)
    };
    
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  const mealsList = meals.map((meal) =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals