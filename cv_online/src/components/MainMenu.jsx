import React from "react";
import style from "../styles/MainMenu.module.css";
import { Link } from "react-router-dom";

function menu() {
  return (
    <section className={style.container}>
      <div className={style.pancarte}>
        <ul className={style.choix}>
          <Link to="/diplômes">DIPLÔMES</Link>
          <a href="Competences.jsx#competences">COMPÉTENCES</a>
          <a href="CentreInterets.jsx#centresineters">CENTRES D'INTÉRÊTS</a>
          <a href="Contact.jsx#contact">CONTACTS</a>
        </ul>
      </div>
    </section>
  );
}

export default menu;
