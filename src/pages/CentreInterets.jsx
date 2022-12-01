import React from "react";
import CEI from "../components/CentreInterets";
import Menu from "../components/MainMenu.jsx";
import style from "../styles/wrapper.module.css";

const CentreInterets = () => {
  return (
    <div className={style.wrapper}>
      <Menu />
      <CEI />
    </div>
  );
};

export default CentreInterets;
