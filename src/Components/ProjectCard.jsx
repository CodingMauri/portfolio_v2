import React from "react";

import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="w-full flex flex-row h-full "
      // whileHover={{ scale: 1.1 }}
      // transition={{ duration: 0.5 }}
    >
      
        <img
          src={project.image}
          className="object-cover w-[46%] h-3/6 rounded-lg"
          alt={project.project}
        />
      <div className = "w-[55%] h-fit   mt-[7rem] flex flex-col  items-center justify-center p-5 bottom-0">
          <h2 className = 'w-full text-md font-bold pb-2 '>{project.project}</h2>
          <p className = "text-lg ">{project.about}</p>
        
        <div className = "flex flex-row w-full pt-8">
          <button className = "px-4 py-2 font-medium rounded mr-2 outline outline-white bg-gray-600">
            <a href = {project.github} target = "_blank" rel = "noopener noreferrer" className  = "text-sm pt-8">Github Repo</a>
          </button>
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;
