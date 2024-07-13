import Hero from "./_components/Hero";
import About from "./_components/About";
import Header from "./_components/Header";
import SectionDivider from "./_components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Header />
      <Hero />
      <SectionDivider />
      <About />
    </main>
  );
}
