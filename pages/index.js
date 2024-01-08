import React from 'react'
import { HomeSection, Projects, TechStack, Contact, About, Testimonials, Services } from "../components";

export default function Home() {
  
  return (
    <>
      <HomeSection/>
      <About />
      <TechStack />
      <Services/>
      <Projects />
      <Testimonials/>
      <Contact />
    </>
  );
}
