import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
