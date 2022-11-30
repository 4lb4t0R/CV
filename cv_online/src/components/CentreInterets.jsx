import React from "react";
import style from "../styles/CentreInterets.module.css";

function CentreInterets() {
  return (
    <div className={style.pancarte}>
      <p>Mangas et/ou romans</p>
      <p>Musique</p>
      <p>Jeux-vidéos</p>
      <p>L'open-source</p>
    </div>
  );
}

export default CentreInterets;
