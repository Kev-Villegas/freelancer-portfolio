"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="mb-3 flex w-full flex-col items-center justify-between bg-transparent px-10 pb-4 pt-8 text-gray-400 md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <small className="mb-2 block text-xs md:mb-0 md:mr-4">
          Web Developer
        </small>
      </div>
      <div>
        <a className="text-xs text-gray-300 hover:underline">
          &copy; 2024 All rights reserved.
        </a>
      </div>
      <div className="mt-4 flex space-x-4 md:mt-0">
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
