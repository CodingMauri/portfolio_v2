import React from "react";
// import Contact from "./Contact";
import Hero from "./Hero";
import Nav from "./Nav"
import Skills from "./Skills";
import Projects from "./Projects"
export default function Home() {
  return (
    <div className ="min-h-screen min-w-screen">
        <div className = "bg-[#29323c]"/>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
