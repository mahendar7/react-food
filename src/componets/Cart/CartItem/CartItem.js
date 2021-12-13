import { useContext } from "react";
import CartContext from "../../../ContextApi/cart-context";
import { formatCurrency } from "../../../Helpers/utils";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const onAddHandler = () => {
    let newItem = { ...props.item };
    newItem.amount = 1;
    cartContext.addItem(newItem);
  };

  const onRemoveHandler = () => {
    cartContext.removeItem(props.item.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>
            {formatCurrency(props.item.price)}
          </span>
          <span className={classes.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
