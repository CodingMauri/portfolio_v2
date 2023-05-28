import React from "react";
import Typewriter from "typewriter-effect";
import Projects from "./Projects";

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center ">
      <div className="w-1/2 pl-10">
        

        <div className="flex  flex-col">
          <h3 className = "text-md text-white pb-6">Hi I'm</h3>
          <h1 className=" text-3xl text-white float-left mb-4 font-tilt font-extrabold">
            Mauricio Alvarenga
          </h1>
          <div className="text-white items-center font-josefin font-semibold p-1 ">
            <Typewriter
              className="text-wh"
              options={{
                strings: ["Front-End Developer", "Software Engineer"],
                loop: true,
                autoStart: true,
              }}
            />
          </div>
        </div>
      </div>
      {/* <p className="text-md mx-auto text-white mt-9 p-2 font-josefin ">
        Bay Area Full-Stack Developer with a passion for developing simple, yet
        engaging applications. I love seeing my creativity come to fruition into
        beautiful tech-stacks.
        <br />
        When I'm not coding, you can find me exploring the backroads on my
        motorcycle or making some fire latte art.
      </p> */}
    </div>
  );
}

export default Hero;
