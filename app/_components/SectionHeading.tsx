import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2 className="font-secondary mb-8 flex items-center justify-center text-center text-3xl font-medium capitalize">
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
