"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "@/public/pfp.webp";
import { AnimatedText } from "./AnimatedText";
import { useSectionInView } from "../_lib/hooks";
import { Mails, NotepadText, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/HoverCard";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center transition-all sm:mb-0"
      id="hero"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 0.3,
        }}
        className="mb-2 flex items-center justify-center"
      >
        <div className="relative">
          <div>
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
              <HoverCardTrigger
                href="/"
                className="absolute bottom-[2px] right-1 block h-[22px] w-[22px] rounded-full border-2 border-slate-50 bg-green-600"
              ></HoverCardTrigger>
              <HoverCardContent className="absolute bottom-5 h-fit w-min bg-gray-300 font-medium text-gray-950 md:w-max lg:min-w-max">
                Available to work!
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </motion.div>
      <div className="mb-2 flex-col items-center justify-center space-y-1 text-center">
        <motion.h1
          className="w-full px-4 font-montserrat text-3xl font-medium text-slate-50 md:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AnimatedText
            text="Hey, I'm Kevin Villegas."
            once={true}
            animationSpeed={0.08}
          />
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-nunito text-base text-slate-300"
        >
          I&apos;m a Front-End Developer From Argentina, I&apos;m Currently
          learning <br />{" "}
          <span className="font-semibold text-yellow-300">
            Back-End Development
          </span>
          , <span className="font-semibold">to become a </span>
          <span className="font-semibold text-yellow-300">
            Full-Stack Developer
          </span>{" "}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="flex flex-col items-center justify-center gap-2 px-4 font-raleway text-lg sm:flex-row"
      >
        <Link
          href="#contact"
          aria-label="Contact Me"
          className="font-secondary flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 font-medium text-[#F8F8FF] outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact Me <Mails />
        </Link>
        <a
          href={"cv.pdf"}
          className="font-secondary flex items-center gap-2 rounded-full bg-[#FFFFF0] px-7 py-3 font-medium text-[#101720] opacity-70 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          target="_blank"
          aria-label="Download CV"
        >
          CV
          <NotepadText className="text-slate-900" />
        </a>
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/kevin--villegas/"
          aria-label="Linkedin"
          target="_blank"
        >
          <Linkedin className="rounded-md text-slate-900" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
