import React from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function Project({
  image,
  sitelink,
  title,
  text1,
  text2,
  codelink,
}) {
  const [showPop, setShowPop] = useState(false);
  function handleClick() {
    setShowPop(!showPop);
  }
  return (
    <div className="project">
      <div className="project-left">
        <a href={sitelink} target="_blank" rel="noreferrer">
          <img src={image} alt="app" className="project-image" />
        </a>
      </div>
      <div className="project-right">
        <h2 className="project-title">{title}</h2>
        <p>{text1}</p>
        <br />
        <div className="site-content">
          <b>--Site Content--</b>
          <p>{text2}</p>
        </div>
        <div className="dropdown ">
          <div className="buttons">
            <button onClick={handleClick} className="site-content-button">
              Site Content <AiFillCaretDown />
            </button>
            <a
              href={codelink}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              github code
            </a>
            <a
              href={sitelink}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              view site
            </a>
          </div>
        </div>
        {showPop && text2}
      </div>
    </div>
  );
}
