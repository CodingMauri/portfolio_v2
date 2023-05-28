import React from "react";

import { motion } from "framer-motion";

function ProjectCard({ project }) {

 
  return (
    <motion.div
      className="w-full h-full relative"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className=" object-cover w-full h-full rounded-2xl shadow-2xl"
        src={project.image}
        alt={project.project}
      />

      <div className="absolute cursor-pointer inset-0 bg-black opacity-0 hover:opacity-75 rounded-2xl transition-opacity duration-300">
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center">
            <h3 className="text-lg font-semibold">{project.project}</h3>
            <p className = "text-sm p-6  ">{project.about}</p>
            <div className = "mx-auto py-3 flex justify-center w-full h-full ">
              <motion.button whileHover = {{scale:0.9}} transition = {{duration:0.3}} className="px-4 py-2 font-medium text-white rounded mr-2 bg-red-700 ">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm pt-8"
                >
                  Github Repo
                </a>
              </motion.button>
              <motion.button  whileHover = {{scale:0.9}} transition = {{duration:0.3}} className="px-4 py-2 font-medium text-white rounded  bg-gray-700  ">
                Live
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
