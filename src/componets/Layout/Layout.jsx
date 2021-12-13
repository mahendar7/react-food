import React, { useState } from "react";
import { Header } from ".";
import Cart from "../Cart/Cart";
import Meals from "../Meals/Meals";
// import classes from "./Layout.module.css";

function Layout() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);
  return (
    <>
      <Header showModalHandler={showModalHandler} />
      <main>
        <Meals />
      </main>
      {showModal && (
        <Cart
          showModal={showModal}
          showModalHandler={showModalHandler}
          hideModalHandler={hideModalHandler}
        />
      )}
    </>
  );
}

export default Layout;
