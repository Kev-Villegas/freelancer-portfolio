import css from "@/public/skillsImages/css.webp";
import git from "@/public/skillsImages/git.webp";
import html from "@/public/skillsImages/html.webp";
import next from "@/public/skillsImages/next.webp";
import react from "@/public/skillsImages/react.webp";
import figma from "@/public/skillsImages/figma.webp";
import github from "@/public/skillsImages/github.webp";
import reactIcon from "@/public/skillsImages/react.webp";
import nextjsIcon from "@/public/skillsImages/next.webp";
import chakra from "@/public/skillsImages/chakraui.webp";
import prismaOrm from "@/public/skillsImages/prisma.webp";
import tailwind from "@/public/skillsImages/tailwind.webp";
import gameHub from "@/public/projectsImages/gameHub.webp";
import ecommerce from "@/public/projectsImages/ecommerce.png";
import javascript from "@/public/skillsImages/javascript.webp";
import typescript from "@/public/skillsImages/typescript.webp";
import tailwindIcon from "@/public/skillsImages/tailwind.webp";
import typescriptIcon from "@/public/skillsImages/typescript.webp";
// import framermotionIcon from "@/public/skillsImages/framerMotion.webp";
import { GraduationCap, Speech, Zap } from "lucide-react";
import {
  House,
  BriefcaseBusiness,
  ContactRound,
  Sparkles,
  MailPlus,
} from "lucide-react";

export const aboutInformation = [
  {
    id: 1,
    skill: "Self-Taught",
    icon: <GraduationCap size={25} />,
  },
  {
    id: 2,
    skill: "Comunicative",
    icon: <Speech size={25} />,
  },
  {
    id: 3,
    skill: "Proactive",
    icon: <Zap size={25} />,
  },
];

export const techSkills = [
  {
    id: 999,
    name: "HTML5",
    image: html,
  },
  {
    id: 998,
    name: "CSS3",
    image: css,
  },
  {
    id: 997,
    name: "Chakra UI",
    image: chakra,
  },
  {
    id: 996,
    name: "Tailwind CSS",
    image: tailwind,
  },
  {
    id: 995,
    name: "JavaScript",
    image: javascript,
  },
  {
    id: 994,
    name: "React.js",
    image: react,
  },
  {
    id: 993,
    name: "TypeScript",
    image: typescript,
  },
  {
    id: 992,
    name: "Next.js",
    image: next,
  },
  {
    id: 99,
    name: "Prisma ORM",
    image: prismaOrm,
  },
  {
    id: 991,
    name: "Git",
    image: git,
  },
  {
    id: 990,
    name: "GitHub",
    image: github,
  },
  {
    id: 989,
    name: "Figma",
    image: figma,
  },
];

export const personalProjects = [
  {
    id: 1,
    name: "Game Hub",
    description: "Rawg Similar Website using his API",
    stack: [
      { icon: tailwindIcon, name: "Tailwind CSS" },
      { icon: nextjsIcon, name: "Next.js" },
      { icon: reactIcon, name: "React.js" },
      { icon: typescriptIcon, name: "TypeScript" },
    ],
    image: gameHub,
    link: "",
    type: "web",
  },
  {
    id: 2,
    name: "E-Commerce",
    description:
      "Built a full-stack E-Commerce with a custom RESTful API and full CRUD functionality.",
    stack: [
      { icon: prismaOrm, name: "Prisma" },
      { icon: nextjsIcon, name: "Next.js" },
      { icon: reactIcon, name: "React.js" },
      { icon: typescript, name: "TypeScript" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
    ],
    image: ecommerce,
    link: "",
    type: "web",
  },
] as const;

export const headerLinks = [
  {
    id: 1,
    name: "Home",
    hash: "#hero",
    icon: <House size={19} />,
  },
  {
    id: 2,
    name: "About",
    hash: "#about",
    icon: <ContactRound size={19} />,
  },
  {
    id: 3,
    name: "Projects",
    hash: "#projects",
    icon: <BriefcaseBusiness size={19} />,
  },
  {
    id: 4,
    name: "Skills",
    hash: "#skills",
    icon: <Sparkles size={19} />,
  },
  {
    id: 5,
    name: "Contact",
    hash: "#contact",
    icon: <MailPlus size={18} />,
  },
];
