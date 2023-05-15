import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <Link to="/">FD</Link>
      <Link to="/projects">My Projects</Link>
    </ul>
  );
}
