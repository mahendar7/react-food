import React, { useContext, useRef } from "react";
import { Input } from "../../../UI/";
import classes from "./MealItemForm.module.css";

import CartContext from "../../../../ContextApi/cart-context";

function MealItemForm(props) {
  const cartContext = useContext(CartContext);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let enteredAmount = amountInputRef.current.value;

    if (enteredAmount.trim().length < 1) return;

    let enteredAmountNumber = +amountInputRef.current.value;

    let newMeal = { ...props.meal };
    newMeal.amount = enteredAmountNumber;
    cartContext.addItem(newMeal);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Quantity"
        input={{
          id: "quantity",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          value: 1,
        }}
        ref={amountInputRef}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
