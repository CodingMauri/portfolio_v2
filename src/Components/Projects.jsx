import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage from "../assets/Images/netflix-clone-image.png";
function Projects() {
  const projectData = [
    {
      id: 1,
      project: "Netflix-Clone",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",

      image: projectImage,
    },
    {
      id: 2,

      project: "Ye ye ",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",

      image: projectImage,
    },
    {
      id: 3,

      project: "Netflix-Clone",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",

      image: projectImage,
    },
    {
      id: 4,

      project: "Netflix-Clone",
      url: "https://netfli-x-clone.netlify.app/",
      github: "https://github.com/CodingMauri/n-clone2",

      image: projectImage,
    },
  ];
  return (
    <>
      <div className="flex relative justify-center items-center h-screen m-9 p-2">

        <div className = "w-[90%] top-4 bottom-1 h-full grid grid-cols-2 gap-11 absolute p-6 ">
          {projectData.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
