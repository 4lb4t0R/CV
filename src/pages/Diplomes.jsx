import React from "react";
import Diplaume from "../components/Diplomes.jsx";
import Menu from "../components/MainMenu.jsx";
import style from "../styles/wrapper.module.css";

const Diplomes = () => {
  return (
    <div className={style.wrapper}>
      <Menu />
      <Diplaume />
    </div>
  );
};

export default Diplomes;
