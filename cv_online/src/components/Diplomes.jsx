import React from "react";
import style from "../styles/MainMenu.module.css";

function diplomes() {
  return (
    <section className={style.container} id="diplomes">
      <div className={style.pancarte}>
        <ul className={style.choix}>
          <li>Diplômes</li>
          <li>Compétences</li>
          <li>Centres d'intérêts</li>
          <li>Contacts</li>
        </ul>
      </div>
    </section>
  );
}

export default diplomes;
