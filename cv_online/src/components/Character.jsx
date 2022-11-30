import React from "react";
import style from "../styles/Character.module.css";
import pdp from "../assets/pdp.png";

function Character() {
  return (
    <div className={style.pancarte}>
      <img src={pdp} alt="photo représentative à 90%" />
      <p>🔰DÉVELOPPEUR WEB FULLSTACK JUNIOR🔰</p>
      <p>☎️06-84-98-17-09☎️</p>
      <p>🟣LAFAYE NICOLAS🟣</p>
    </div>
  );
}

export default Character;
