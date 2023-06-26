import React from "react";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div className="w-1/2 min-h-screen mx-auto  ">
      <div className=" text-center w-full h-full flex flex-col justify-center items-center  pt-20 ">
        <h3 className="text-5xl capitalize font-josefina">Hi i'm</h3>

        <span className="text-9xl bold font-blanks capitalize ">
          {" "}
          Mauricio Alvarenga
        </span>
        <div className="text-5xl leading-snug capitalize">
          <Typewriter
            options={{
              strings: ["Front-end Developer", "Software Engineer", "ye ye "],

              autoStart: true,
              loop: true,
            }}
          ></Typewriter>
        </div>
        <div className="w-full text-md min-h-[100px] capitalize flex flex-col justify-center items-center ">
          <p className="pt-7">
            Bay Area Front-end Developer with a passion for creating engaging
            yet simple applications. I have a knack for solving problems,
            helping others and keeping calm under pressure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
