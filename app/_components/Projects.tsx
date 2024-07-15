"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/Card";
import gameHub from "@/public/projectsImages/gameHub.webp";
import portfolioCover from "@/public/projectsImages/portfolioCover.webp";
import tailwindIcon from "@/public/skillsImages/tailwind.webp";
import reactIcon from "@/public/skillsImages/react.webp";
import typescriptIcon from "@/public/skillsImages/typescript.webp";
import framermotionIcon from "@/public/skillsImages/framerMotion.png";
import nextjsIcon from "@/public/skillsImages/next.webp";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      name: "Game Hub",
      description: "Rawg Similar Website using his API",
      stack: [
        { icon: tailwindIcon, name: "Tailwind CSS" },
        { icon: nextjsIcon, name: "Next.js" },
        { icon: reactIcon, name: "React.js" },
        { icon: typescriptIcon, name: "TypeScript" },
      ],
      image: gameHub,
      link: "",
      type: "web",
    },
    {
      id: 2,
      name: "Portfolio",
      description: "Personal Portfolio",
      stack: [
        { icon: framermotionIcon, name: "Framer Motion" },
        { icon: nextjsIcon, name: "Next.js" },
        { icon: reactIcon, name: "React.js" },
        { icon: tailwindIcon, name: "Tailwind CSS" },
      ],
      image: portfolioCover,
      link: "",
      type: "web",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-8 mt-8 max-w-[45rem]"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center text-slate-50">
          <SectionHeading>
            <BriefcaseBusiness className="mr-2" size={26} />
            Projects
          </SectionHeading>

          <div className="flex w-full items-center justify-between">
            <p className="max-w-[900px] text-start text-xl">
              Projects I Worked On
            </p>
          </div>
        </div>
        <div className="mt-8 grid w-full grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {myProjects.map((project) => (
            <Card
              className="mx-auto flex flex-col bg-transparent"
              key={project.id}
            >
              <CardHeader className="mb-1">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  quality={90}
                  className="mb-2 h-[185px] rounded-b-sm rounded-t-xl transition-all duration-300 hover:scale-100"
                />
                <CardTitle className="flex items-center px-2 py-[5px] text-slate-200">
                  {project.name}
                </CardTitle>
                <CardDescription className="px-2 text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap items-center justify-start gap-2 text-center">
                  {project.stack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 font-medium text-gray-300 transition-all duration-300 hover:scale-110"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        quality={100}
                        width={20}
                        height={20}
                        className="rounded-sm"
                      />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
