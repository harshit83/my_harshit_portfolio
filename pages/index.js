import React from 'react'
import { HomeSection, Experience, Projects, TechStack, Contact, About, Testimonials } from "../components";

export default function Home() {
  
  return (
    <>
      <HomeSection/>
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Testimonials/>
      <Contact />
    </>
  );
}
