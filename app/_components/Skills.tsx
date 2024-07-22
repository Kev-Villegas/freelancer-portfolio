"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { techSkills } from "../_lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "../_lib/hooks";
import { fadeInAnimationVariants } from "@/app/_lib/animations";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[46rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>
        <Sparkles size={20} className="mr-2" />
        Skills
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {techSkills.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="relative flex transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/25 bg-zinc-800 px-2 text-center font-nunito text-base font-medium text-slate-200 hover:bg-zinc-700"
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
