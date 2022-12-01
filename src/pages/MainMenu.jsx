import React from "react";
import Menu from "../components/MainMenu.jsx";
import Karakter from "../components/Character.jsx";
import style from "../styles/wrapper.module.css";

const MenuPrincipal = () => {
  return (
    <div className={style.wrapper}>
      <Menu />
      <Karakter />
    </div>
  );
};

export default MenuPrincipal;
