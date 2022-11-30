import React from "react";
import style from "../styles/MainMenu.module.css";

function menu() {
  return (
    <section className={style.container}>
      <div>
        <ul>
            <li>Diplômes</li>
            <li>Compétences</li>
            <li>Centres d'intérêts</li>
            <li>Contacts</li>
        </ul>
      </div>
    </section>
  );
}

export default menu;
