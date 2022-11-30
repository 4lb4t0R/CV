import React from "react";
import style from "../styles/MainMenu.module.css";
import { Link } from "react-router-dom";

function menu() {
  return (
    <section className={style.container}>
      <div className={style.pancarte}>
        <ul className={style.choix}>
          <Link to="/diplômes">Diplômes</Link>
          <a href="Competences.jsx#competences">Compétences</a>
          <a href="CentreInterets.jsx#centresineters">Centres d'intérêts</a>
          <a href="Contact.jsx#contact">Contacts</a>
        </ul>
      </div>
    </section>
  );
}

export default menu;
