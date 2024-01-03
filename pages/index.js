import Image from "next/image";
import { HomeSection, Experience, Projects, TechStack, Contact, About } from "../components";

export default function Home() {
  return (
    <>
      <HomeSection/>
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}
