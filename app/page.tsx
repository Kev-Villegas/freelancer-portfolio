import Hero from "./_components/Hero";
import About from "./_components/About";
import Header from "./_components/Header";
import Skills from "./_components/Skills";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import SectionDivider from "./_components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Header />
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
