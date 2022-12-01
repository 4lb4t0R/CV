import React from "react";
import style from "../styles/Diplomes.module.css";

function Diplomes() {
  return (
    <div className={style.pancarte}>
      <p>👨‍🎓2022 - Développeur web fullstack, orienté JS (BAC+2)</p>
      <p>👨‍🎓2020-2021 - INSPE de Mérignac (BAC+4)</p>
      <p>
        👨‍🎓 2017-2020 - Licence de lettres moderne + DEUG Histoire de l’Art
        (BAC+2 et +3)
      </p>
      <p>
        {" "}
        👨‍🎓 2013-2017 - Bac professionnel gestion des milieux naturels et de la
        faune (BAC Pro)
      </p>
    </div>
  );
}

export default Diplomes;
