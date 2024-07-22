import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2 className="mb-8 flex items-center justify-center text-center font-montserrat text-3xl font-medium capitalize text-amber-100">
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
