import React from "react";
import Typewriter from "typewriter-effect";
import Projects from "./Projects";

function Hero() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="bg-gray-400 w-1/3 flex flex-col justify-center items-center h-screen ">
        <h1 className="font-bold text-3xl text-white ">Mauricio Alvarenga</h1>
        <Typewriter
          options={{
            strings: ["Front-End Developer", "Software Engineer"],
            loop: true,
            autoStart: true,
          }}
        />
      </div>
      <div className="w-3/4">
      <h1 className="text-4xl font-bold mb-8 text-right absolute top-0 right-0 transform -translate-y-full">
          Projects
        </h1>
      
        <Projects />
      </div>
    </div>
  );
}

export default Hero;
