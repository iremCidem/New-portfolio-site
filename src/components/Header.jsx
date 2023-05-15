import React from "react";
import myPhoto from "../images/cv2.jpg";

export default function Header() {
  return (
    <div className="header">
      <div>
        <img src={myPhoto} alt="myPhoto" className="header-image" />
      </div>
      <div>
        <h1 className="header-text1">Hi, my name is Irem, </h1>
        <h1 className="header-text2">i'm a frontend developer.</h1>
      </div>
    </div>
  );
}
