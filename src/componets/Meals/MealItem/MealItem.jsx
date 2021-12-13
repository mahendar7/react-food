import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
import { formatCurrency } from "../../../Helpers/utils";

function MealItem({ meal }) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{formatCurrency(meal.price)}</div>
      </div>
      <div>
        <MealItemForm meal={meal} />
      </div>
    </li>
  );
}

export default MealItem;
