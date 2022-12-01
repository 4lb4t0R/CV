import React from "react";
import style from "../styles/MainMenu.module.css";
import { Link } from "react-router-dom";

function menu() {
  return (
    <section className={style.container}>
      <div className={style.pancarte}>
        <ul className={style.choix}>
          <Link to="/">MENU</Link>
          <Link to="/Diplomes">DIPLÔMES</Link>
          <Link to="/Competences">COMPÉTENCES</Link>
          <Link to="/Contact">CONTACT</Link>
          <Link to="/Centres d_interets">CENTRES D'INTÉRÊTS</Link>
        </ul>
      </div>
    </section>
  );
}

export default menu;
