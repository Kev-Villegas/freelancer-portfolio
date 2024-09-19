import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const headingVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.6,
    },
  },
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.h2
      className="mb-5 flex items-center justify-center text-center font-montserrat text-3xl font-medium capitalize text-zinc-50"
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
