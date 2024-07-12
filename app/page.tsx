import Hero from "./_components/Hero";
import Header from "./_components/Header";

export default function Home() {
  return (
    <main className="flex min-h-[300vh] flex-col items-center px-4">
      <Header />
      <Hero />
    </main>
  );
}
