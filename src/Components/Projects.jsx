import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage from "../assets/Images/netflix-clone-image.png";
import projectImage2 from "../assets/Images/retrodash.png";
import projectImage3 from "../assets/Images/JupiterDeals.png";
import projectImage4 from "../assets/Images/netflix.png";

function Projects() {
  const projectData = [
    {
      id: 1,
      project: "Netflix-Clone",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",
      about:
        "Full-Stack application using react and tailwind for the front-end and using google firebase for backend hosting and express for the framework.",

      image: projectImage,
    },
    {
      id: 2,

      project: "RetroDash",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",
      about:
      "Full-Stack application using react and tailwind for the front-end and using google firebase for backend hosting and express for the framework.",


      image: projectImage2,
    },
    {
      id: 3,

      project: "JupiterDeals",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",
      about:
      "Full-Stack application using react and tailwind for the front-end and using google firebase for backend hosting and express for the framework.",

      image: projectImage3,
    },
    {
      id: 4,

      project: "Netflix-Clone",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",
      about:
      "Full-Stack application using react and tailwind for the front-end and using google firebase for backend hosting and express for the framework.",

      image: projectImage4,
    },
  ];
  return (
    <div className = "w-[80%] min-h-screen mx-auto">

      <h1 className ="text-2xl w-full bg-red font-thin text-white font-tilt underlined pb-4">my works </h1>

      <div className="flex relative justify-center items-center m-8 p-2 h-[700px]">
        <div className="w-full h-full ">
          {projectData.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
