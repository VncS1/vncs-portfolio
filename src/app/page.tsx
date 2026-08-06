import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Tech } from "@/components/Tech";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
