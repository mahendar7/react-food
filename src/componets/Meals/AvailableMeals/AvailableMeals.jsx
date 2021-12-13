import React, { useContext } from "react";
import classes from "./AvailableMeals.module.css";

import meals from "../meals-data.js";
import MealItem from "../MealItem/MealItem";

import { Card } from "../../UI/index";
import CartContext from "../../../ContextApi/cart-context";

function AvailableMeals() {
  const cartContext = useContext(CartContext);

  console.log(cartContext);
  return (
    <div className={classes["available-meals"]}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default AvailableMeals;
