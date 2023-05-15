import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-text">contact me</h2>
      <a
        href="https://www.linkedin.com/in/irem-%C3%A7idem/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={"45px"} fill="black" />
      </a>
      <a href="https://github.com/iremCidem" target="_blank" rel="noreferrer">
        <AiFillGithub size={"45px"} fill="black" />
      </a>
      <a href="mailto:iremcidem33@gmail.com" target="_blank" rel="noreferrer">
        <AiFillMail size={"45px"} fill="black" />
      </a>
    </div>
  );
}
