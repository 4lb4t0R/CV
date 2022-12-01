import React from "react";
import Contact from "../components/Contact";
import Menu from "../components/MainMenu.jsx";
import style from "../styles/wrapper.module.css";

const Contakt = () => {
  return (
    <div className={style.wrapper}>
      <Menu />
      <Contact />
    </div>
  );
};

export default Contakt;
