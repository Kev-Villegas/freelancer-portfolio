"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="flex w-full flex-col items-center justify-between bg-transparent px-4 py-4 font-nunito text-sm text-gray-400 md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center md:items-start">
        <small className="block text-[13px]">
          Kevin Villegas | Web Developer
        </small>
      </div>
      <div className="mt-2 md:mt-0">
        <a className="hover:underline">&copy; 2024 All rights reserved.</a>
      </div>
      <div className="mt-2 flex space-x-4 sm:mr-0 md:mt-0 lg:mr-6">
        <a
          href="https://github.com/Kev-Villegas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin--villegas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
