import React from "react";
import Competences from "../components/Competences";
import Menu from "../components/MainMenu.jsx";
import style from "../styles/wrapper.module.css";

const Competensse = () => {
  return (
    <div className={style.wrapper}>
      <Menu />
      <Competences />
    </div>
  );
};

export default Competensse;
