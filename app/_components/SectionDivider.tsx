"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-300 dark:bg-opacity-20 sm:block"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
      viewport={{ once: false }}
    ></motion.div>
  );
}
