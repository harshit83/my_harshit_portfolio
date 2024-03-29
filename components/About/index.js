import React, { useEffect } from "react";
import CanvasBackground from "../CanvasBackground";
import Tilt from "react-parallax-tilt";
import { Link, animateScroll as scroll } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div
      id="about"
      className="w-[90%] select-none mx-auto text-white pt-[8vh] overflow-hidden"
    >
      <h1
        data-aos="zoom-in"
        data-aos-duration="400"
        className="text-center  text-[5vh] font-semibold mb-[2vh]"
      >
        About Me
      </h1>

      <h2
        data-aos="fade-up"
        data-aos-duration="400"
        className="mb-[5vh] text-[2.4vh] mx-auto md:text-[3vh] w-fit px-[2vh] text-gray-600 bg-slate-300"
      >
        Mechanical Engineer
      </h2>

      <div className="flex flex-col-reverse md:flex-row md:w-[95%] mx-auto justify-between">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-[90%] md:w-[60%] mx-auto md:mx-0"
        >
          <div className="flex flex-row justify-start items-center">
            <h1 className="text-[2.8vh] md:text-[4vh] mr-[2vh] font-semibold">
              Hi There
            </h1>
            <img
              className="w-[6vh] md:w-[8vh]"
              src="./Images/handshake.gif"
              alt="handshake"
            />
          </div>

          <p className="text-[2.5vh]  md:text-[3vh] font-normal text-justify text-gray-200 my-[1vh]">
          I'm Harshit Dhamanse, a dedicated Mechanical Engineer. With a keen eye for detail and a passion for innovation,
            I excel in Production Management , Engineering tools, and Excellence and Practices. As a Fourth Year undergrad specializing
            in Mechanical Engineering  my aim is to create a optimized solution for a workplace and Manage the proper Production flow and follow proper Engineering practice.{" "}
          </p>

          <div className="mb-[2vh] flex flex-row flex-wrap justify-center md:justify-start gap-x-[8vh] gap-y-[3vh]">
            <div className="flex flex-col w-[10vh] md:w-[18vh] p-[1.5vh] justify-center items-center">
              <h2 className="text-[5vh] md:text-[7vh]  gradienttxt">03+</h2>
              <p className="text-center text-[2.5vh] leading-[2.8vh] font-normal text-gray-200">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col w-[10vh] md:w-[18vh] p-[1.5vh] justify-center items-center">
              <h2 className="text-[5vh] md:text-[7vh] gradienttxt">10+</h2>
              <p className="text-center text-[2.5vh] leading-[2.8vh] font-normal text-gray-200">
                Projects Completed
              </p>
            </div>
            {/* <div className="flex flex-col w-[10vh] md:w-[18vh] p-[1.5vh] justify-center items-center">
              <h2 className="text-[5vh] md:text-[7vh] gradienttxt">06+</h2>
              <p className="text-center text-[2.5vh] leading-[2.8vh] font-normal text-cyan-200">
                Happy Clients
              </p>
            </div> */}
          </div>
        </div>

        <Tilt className="mx-auto md:mx-0 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="gauravimg relative p-[1vh] w-[80vw] h-[52vh] md:w-[50vh] md:h-[60vh] flex flex-row justify-center items-center"
          >
            <img
              src="./Images/harshit.jpeg"
              className="absolute z-[50] w-[95%] h-[50vh] mx-auto md:w-[48vh] md:h-[58vh] object-cover"
              alt="gauravimg"
            />
          </div>
        </Tilt>

        <CanvasBackground className="absolute -z-20 top-50" />
      </div>
    </div>
  );
}
