"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "@/public/pfp.webp";
import { Mails, NotepadText, Linkedin } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";

const Hero = () => {
  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="hero"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.15,
            }}
          >
            <Image
              src={profileImg}
              alt="Kevin Villegas"
              width="192"
              height="192"
              priority={true}
              quality={100}
              className="h-24 w-24 rounded-full border-[0.24rem] border-slate-50 object-cover shadow-sm"
            />

            <HoverCard openDelay={300} closeDelay={150}>
              <HoverCardTrigger className="absolute bottom-[2px] right-1 block h-[22px] w-[22px] rounded-full border-2 border-slate-50 bg-green-600"></HoverCardTrigger>
              <HoverCardContent className="absolute bottom-5 left-3 max-w-4xl rounded-md bg-gray-300 px-2 font-medium text-gray-950">
                Available to work!
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        </div>
      </div>
      <div className="mb-2 flex-col items-center justify-center space-y-1 text-center">
        <motion.h1
          className="mt-4 w-full px-4 text-2xl font-medium text-slate-50 sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, Im Kevin Villegas. <br />
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl text-slate-100"
        >
          A Web Developer From Argentina.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-slate-300"
        >
          I Build Fast, Responsive and SEO-Friendly Websites That Enhance <br />{" "}
          Your Online Presence.
        </motion.h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg sm:flex-row"
      >
        <Link
          href="#contact"
          className="font-secondary flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 font-medium text-[#F8F8FF] outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact Me <Mails />
        </Link>
        <a
          href={"cv.pdf"}
          className="font-secondary flex items-center gap-2 rounded-full bg-[#FFFFF0] px-7 py-3 font-medium text-[#101720] opacity-70 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          target="_blank"
        >
          CV
          <NotepadText className="text-slate-900" />
        </a>
        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/kevin--villegas/"
          target="_blank"
        >
          <Linkedin className="rounded-md text-slate-900" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
