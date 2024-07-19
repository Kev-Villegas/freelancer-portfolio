"use client";

import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { headerLinks } from "../_lib/data";

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-b-3xl border border-white border-opacity-40 bg-slate-900 bg-opacity-80 shadow-md shadow-gray-700 backdrop-blur-[0.1rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {headerLinks.map((link) => (
            <motion.li
              key={link.id}
              className="relative flex h-3/4 items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center space-x-1 px-2 py-3 text-center transition hover:text-gray-300",
                )}
              >
                <p className="font-light">{link.icon}</p>
                <span className="font-normal">{link.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
