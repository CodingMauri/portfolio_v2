import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div className="w-full h-full relative" whileHover={{ scale: 1.1 }} transition = {{duration:0.5}}>
      <img
        className=" object-cover w-full h-full rounded-2xl shadow-inner"
        src={project.image}
        alt="project-image"
      />

      <div className="absolute cursor-pointer inset-0 bg-black opacity-0 hover:opacity-75 rounded-2xl transition-opacity duration-300">
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center">
            <h3 className="text-lg font-semibold">{project.project}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm pt-8"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
