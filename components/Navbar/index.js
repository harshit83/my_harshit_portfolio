import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      {loading && (
        <div>
          <div className="navbar relative z-50 w-[95%] mx-auto flex justify-between p-7 md:p-10 items-center">
            <div>
              <img
                src="./Images/gauravlogo.png"
                alt="gauravlogo"
                className="w-28 md:w-32 lg:w-48"
              />
            </div>

            <ul className="navlinks flex flex-row gap-x-[4vh]">
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

            <button className="navbtn btngradient font-semibold px-[2vh] md:px-[3vh] py-[1vh] my-1 text-[2.3vh] md:text-[3vh] text-white ">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </button>

            <div className="p-[1vh] md:hidden" onClick={toggleMobileNav}>
              <FontAwesomeIcon
                className="text-[3.5vh] text-white"
                icon="fa-solid fa-bars"
              />
            </div>
          </div>

          <div
            className={`navlinks-mobile md:hidden fixed z-50 h-[100vh] w-[80%] top-0 bg-white flex flex-col justify-center items-center transition-transform duration-500 ease-in-out  ${
              mobileNavOpen ? "-translate-x-[0vh]" : "-translate-x-[100vw]"
            }`}
          >
            <div
              onClick={toggleMobileNav}
              className="absolute cursor-pointer top-0 right-0 p-[4vh]"
            >
              <FontAwesomeIcon
                className="text-[6vh] text-gray-700"
                icon="fa-solid fa-xmark"
              />
            </div>
            <ul className="flex flex-col gap-y-[6vh]">
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
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <li className="navlist text-white text-[3vh] font-normal hover:text-cyan-500  cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
