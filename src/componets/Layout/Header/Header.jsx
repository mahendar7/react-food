import React from "react";
import Meals from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton showModalHandler={props.showModalHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Meals} alt="meals" />
      </div>
    </>
  );
}

export default Header;
