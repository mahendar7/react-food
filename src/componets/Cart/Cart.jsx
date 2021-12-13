import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { Modal } from "../UI";

import CartItem from "./CartItem/CartItem";

import { formatCurrency } from "../../Helpers/utils";
import CartContext from "../../ContextApi/cart-context";

function Cart(props) {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );

  return (
    <Modal
      showModal={props.showModal}
      showModalHandler={props.showModalHandler}
      hideModalHandler={props.hideModalHandler}
    >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formatCurrency(cartContext.totalAmount)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button-alt"]}
          onClick={props.hideModalHandler}
        >
          Close
        </button>
        {cartContext?.items?.length ? (
          <button className={classes.button} onClick={props.hideModalHandler}>
            Order
          </button>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
}

export default Cart;
