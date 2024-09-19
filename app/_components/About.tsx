"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserRoundPen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutInformation } from "../_lib/data";
import { useSectionInView } from "../_lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        staggerChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-7 sm:mb-40"
      id="about"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="flex items-center justify-center text-center text-slate-100">
        <SectionHeading>
          <UserRoundPen className="mr-2" size={26} />
          About me
        </SectionHeading>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        <div className="mb-2 flex flex-col">
          <motion.span
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 text-center font-nunito text-slate-200"
          >
            As I complete my Technical Programming Degree and consider pursuing
            a Bachelors in Computer Science, I specialize in creating fast,
            responsive, and SEO-friendly websites that enhance your online
            presence. Imagine converting visitors into loyal customers with a
            user-friendly site tailored to your needs. Partnering with me means
            investing in a digital foundation that drives growth and sets you
            apart.
          </motion.span>
        </div>
        <motion.div
          className="grid cursor-pointer grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {aboutInformation.map((info) => (
            <motion.div
              key={info.id}
              className="flex flex-col items-center justify-center gap-2 p-4 font-montserrat"
              variants={childVariants}
            >
              <span className="text-4xl text-slate-50">{info.icon}</span>
              <span className="text-center text-sm font-medium text-gray-300">
                {info.skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
