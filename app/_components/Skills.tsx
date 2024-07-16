"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import css from "@/public/skillsImages/css.webp";
import git from "@/public/skillsImages/git.webp";
import html from "@/public/skillsImages/html.webp";
import next from "@/public/skillsImages/next.webp";
import react from "@/public/skillsImages/react.webp";
import figma from "@/public/skillsImages/figma.webp";
import github from "@/public/skillsImages/github.webp";
import chakra from "@/public/skillsImages/chakraui.webp";
import tailwind from "@/public/skillsImages/tailwind.webp";
import javascript from "@/public/skillsImages/javascript.webp";
import typescript from "@/public/skillsImages/typescript.webp";
import SectionHeading from "./SectionHeading";
import { Sparkles } from "lucide-react";

export const skillsData = [
  {
    id: 999,
    name: "HTML5",
    image: html,
  },
  {
    id: 998,
    name: "CSS3",
    image: css,
  },
  {
    id: 997,
    name: "Chakra UI",
    image: chakra,
  },
  {
    id: 996,
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    id: 995,
    name: "JavaScript",
    image: javascript,
  },
  {
    id: 994,
    name: "React.js",
    image: react,
  },
  {
    id: 993,
    name: "TypeScript",
    image: typescript,
  },
  {
    id: 992,
    name: "Next.js",
    image: next,
  },
  {
    id: 991,
    name: "Git",
    image: git,
  },
  {
    id: 990,
    name: "GitHub",
    image: github,
  },
  {
    id: 989,
    name: "Figma",
    image: figma,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>
        <Sparkles size={20} className="mr-2" />
        Skills
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            custom={index}
            className="relative flex transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/25 bg-zinc-800 px-2 text-center text-base font-medium text-slate-200 transition-all duration-300 hover:scale-110"
          >
            <div className="flex items-center rounded-lg p-2">
              <Image
                src={skill.image}
                alt={skill.name}
                quality={90}
                className="mr-2 h-[22px] w-[22px] cursor-pointer rounded-[4px]"
              />
              <span>{skill.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
