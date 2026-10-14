import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Contact />
    </>
  );
}
