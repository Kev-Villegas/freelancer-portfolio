import reactIcon from "@/public/skillsImages/react.webp";
import nextjsIcon from "@/public/skillsImages/next.webp";
import gameHub from "@/public/projectsImages/gameHub.webp";
import tailwindIcon from "@/public/skillsImages/tailwind.webp";
import typescriptIcon from "@/public/skillsImages/typescript.webp";
import framermotionIcon from "@/public/skillsImages/framerMotion.png";
import portfolioCover from "@/public/projectsImages/portfolioCover.webp";

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
