"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CodeXml,
  MonitorSmartphone,
  Rocket,
  Search,
  UserRoundPen,
  Layers3,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const About = () => {
  const information = [
    {
      id: 1,
      skill: "Web Development",
      icon: <CodeXml size={20} />,
    },
    {
      id: 2,
      skill: "SEO Optimization",
      icon: <Search size={20} />,
    },
    {
      id: 3,
      skill: "Responsive Design",
      icon: <MonitorSmartphone size={20} />,
    },
    {
      id: 4,
      skill: "Performance Optimization",
      icon: <Rocket size={20} />,
    },
    {
      id: 5,
      skill: "UX/UI Friendly",
      icon: <UserRoundPen size={20} />,
    },
    {
      id: 6,
      skill: "Multipage Website",
      icon: <Layers3 size={20} />,
    },
  ];
  return (
    <motion.section
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
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col">
          <p className="mb-4 text-center text-slate-200">
            As I complete my Technical Programming Degree and consider pursuing
            a Bachelor&apos;s in Computer Science, I specialize in creating
            fast, responsive, and SEO-friendly websites that enhance your online
            presence. Imagine converting visitors into loyal customers with a
            user-friendly site tailored to your needs. Partnering with me means
            investing in a digital foundation that drives growth and sets you
            apart.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 space-y-2">
          {information.map((info) => (
            <div
              key={info.id}
              className="flex cursor-pointer gap-2 rounded-md transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <span className="flex items-center px-4 text-4xl text-slate-50">
                {info.icon}
              </span>
              <span className="items-center justify-center text-start text-sm font-medium text-gray-300">
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
