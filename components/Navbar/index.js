import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="navbar relative z-50 w-[95%] mx-auto flex justify-between p-7 md:p-10 items-center">
        <div>
          <img
            src="./Images/gauravlogo.png"
            alt="gauravlogo"
            className="w-28 md:w-32 lg:w-48"
          />
        </div>

        <ul className="flex flex-col md:flex-row md:gap-5 lg:gap-10 ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <li className="navlist text-white text-[3vh] font-normal hover:text-cyan-500  cursor-pointer">
              Home
            </li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <li className="navlist text-white text-[3vh] font-normal hover:text-cyan-500  cursor-pointer">
              About Me
            </li>
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <li className="navlist text-white text-[3vh] font-normal hover:text-cyan-500  cursor-pointer">
              Experience
            </li>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <li className="navlist text-white text-[3vh] font-normal hover:text-cyan-500  cursor-pointer">
              Projects
            </li>
          </Link>
        </ul>
        <button className="btngradient font-semibold px-[2vh] md:px-[3vh] py-[1vh] my-1 text-[2.3vh] md:text-[3vh] text-white ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </button>
      </div>
    </>
  );
}
