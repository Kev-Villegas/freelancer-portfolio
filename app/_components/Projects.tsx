"use client";

import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personalProjects } from "../_lib/data";
import { BriefcaseBusiness } from "lucide-react";
import { useSectionInView } from "../_lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.75);

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[44rem] scroll-mt-28 sm:mb-40"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center text-slate-50">
          <SectionHeading>
            <BriefcaseBusiness className="mr-2" size={26} />
            Projects
          </SectionHeading>

          <div className="flex w-full items-center justify-between">
            <p className="max-w-[900px] text-start font-nunito text-xl">
              Projects I Worked On
            </p>
          </div>
        </div>
        <div className="mt-6 grid w-[90%] grid-cols-1 gap-4 sm:w-full sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3">
          {personalProjects.map((project) => (
            <Project
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
