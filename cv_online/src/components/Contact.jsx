import React from "react";
import style from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={style.pancarte}>
      <a href="https://github.com/4lb4t0R" target="_blank" rel="noreferrer">
        {" "}
        GITHUB
      </a>
      <a
        href="https://www.linkedin.com/in/4lb4t0r/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        LINKEDIN
      </a>
      <a href="mailto:4lb4t0R@protonmail.com?body=My custom mail body">MAIL</a>
    </div>
  );
}

export default Contact;
