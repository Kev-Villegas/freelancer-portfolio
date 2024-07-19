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
import tailwind from "@/public/skillsImages/tailwind.webp";
import gameHub from "@/public/projectsImages/gameHub.webp";
import javascript from "@/public/skillsImages/javascript.webp";
import typescript from "@/public/skillsImages/typescript.webp";
import tailwindIcon from "@/public/skillsImages/tailwind.webp";
import typescriptIcon from "@/public/skillsImages/typescript.webp";
import framermotionIcon from "@/public/skillsImages/framerMotion.png";
import portfolioCover from "@/public/projectsImages/portfolioCover.webp";

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
    name: "Portfolio",
    description: "Personal Portfolio",
    stack: [
      { icon: framermotionIcon, name: "Framer Motion" },
      { icon: nextjsIcon, name: "Next.js" },
      { icon: reactIcon, name: "React.js" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
    ],
    image: portfolioCover,
    link: "",
    type: "web",
  },
] as const;
