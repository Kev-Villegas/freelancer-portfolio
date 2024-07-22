"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserRoundPen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutInformation } from "../_lib/data";
import { useSectionInView } from "../_lib/hooks";
import { AnimatedText } from "./AnimatedText";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-7 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex items-center justify-center text-center text-slate-100">
        <SectionHeading>
          <UserRoundPen className="mr-2" size={26} />
          About me
        </SectionHeading>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        <div className="mb-2 flex flex-col">
          <AnimatedText
            text="As I complete my Technical Programming Degree and consider pursuing
            a Bachelor's in Computer Science, I specialize in creating
            fast, responsive, and SEO-friendly websites that enhance your online
            presence. Imagine converting visitors into loyal customers with a
            user-friendly site tailored to your needs. Partnering with me means
            investing in a digital foundation that drives growth and sets you
            apart."
            className="mb-4 text-center font-nunito text-slate-200"
            animationSpeed={0.009}
            once={true}
            tag="p"
          />
        </div>
        <div className="grid cursor-pointer grid-cols-3 gap-4">
          {aboutInformation.map((info) => (
            <div
              key={info.id}
              className="flex flex-col items-center justify-center gap-2 p-4 font-montserrat transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <span className="text-4xl text-slate-50">{info.icon}</span>
              <span className="text-center text-sm font-medium text-gray-300">
                {info.skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
