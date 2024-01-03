import React from 'react';
import CanvasBackground from '../CanvasBackground';

export default function About() {
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

          <p className='text-[2.5vh] md:text-[3vh] text-justify text-gray-400 my-[3vh]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit commodi earum expedita dicta doloremque dolor totam sunt rerum voluptatem quisquam, minus voluptate amet voluptas! Voluptatum quaerat praesentium quia fuga officia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, atque voluptates rerum dolor dolore veritatis cupiditate similique veniam, labore vel quibusdam laudantium. Consectetur iste quasi explicabo in autem laudantium blanditiis.</p>

          <button className='btngradient px-[2vh] md:px-[3vh] py-[1vh] text-[2vh] md:text-[3vh]'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Connect Me
          </button>

        </div>
        
        <div className='gauravimg'>
          <img src="./Images/gauravimg.jpg" className='gmimg top-[1.5vh] left-[1.5vh] absolute h-[70vh] md:h-[70vh] z-30' alt="gauravimg" />
        </div>

        <CanvasBackground className="absolute -z-20 top-50"/>
      </div>
      
    </div>
  )
}
