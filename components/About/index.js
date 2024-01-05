import React from 'react';
import CanvasBackground from '../CanvasBackground';
import Tilt from "react-parallax-tilt";
import { Link, animateScroll as scroll } from "react-scroll";

export default function About() {

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div id='about' className='w-[85%] mx-auto text-white pt-[8vh]'>
      <h1 className='text-center text-[5vh] font-semibold mb-[5vh]'>About Me</h1>

      <div className='flex flex-col-reverse gap-y-[3vh] md:flex-row justify-around items-center'>

        <div className='md:w-[50%]'>

          <div className='flex flex-row justify-start items-center'>
            <h1 className='text-[2.8vh] md:text-[4vh] mr-[2vh] font-semibold'>Hi There</h1>
            <img className='w-[6vh] md:w-[8vh]' src="./Images/handshake.gif" alt="handshake" />
          </div>

          <h2 className='my-[2vh] text-[2.4vh] md:text-[3vh] w-fit px-[2vh] text-cyan-900 bg-cyan-300'>Full Stack Developer</h2>

          <p className='text-[2.5vh] md:text-[3vh] font-normal text-justify text-gray-200 my-[3vh]'>I'm Gaurav Madan, a dedicated Full Stack Developer and UI/UX enthusiast. With a keen eye for detail and a passion for innovation, I excel in Frontend App Development, Web Development, and crafting captivating user interfaces. As a third-year undergrad specializing in CS&E (Cyber Security), my aim is to create secure and intuitive digital experiences that prioritize functionality and user satisfaction. I thrive on coding magic, constantly weaving creativity into my work to deliver awe-inspiring solutions.</p>

        <Link to="#contact" onClick={scrollToBottom}>
          <button className='btngradient px-[2vh] md:px-[3vh] py-[1vh] text-[2vh] md:text-[3vh]'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Connect Me
          </button>
        </Link>

        </div>
        
        <Tilt>
          <div className='gauravimg relative p-[1vh] w-[80vw] h-[52vh] md:w-[50vh] md:h-[60vh] flex flex-row justify-center items-center'>
            <img src="./Images/gauravimg.jpg" className='absolute z-[50] w-[95%] h-[50vh] mx-auto md:w-[48vh] md:h-[58vh] object-cover'  alt="gauravimg" /> 
          </div>
        </Tilt>

        <CanvasBackground className="absolute -z-20 top-50"/>
      </div>
      
    </div>
  )
}
