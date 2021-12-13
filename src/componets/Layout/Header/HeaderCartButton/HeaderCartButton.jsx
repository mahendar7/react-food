import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../../ContextApi/cart-context";
import CartIcon from "../../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [animateBtn, setAnimateBtn] = useState(false);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    if (!cartContext.items.length) return;
    setAnimateBtn(true);

    const timer = setTimeout(() => {
      setAnimateBtn(false);
    }, 1000);

    return () => {
      // Cleanup
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button
      className={`${classes.button} ${animateBtn ? classes.bump : ""}`}
      onClick={props.showModalHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartContext.items.length}</span>
    </button>
  );
}

export default HeaderCartButton;
