import React from 'react';
import Tilt from "react-parallax-tilt";

export default function Services() {
  return (
    <div id="services">
        <h1 className="text-white text-[3vh] md:text-[5vh] font-semibold text-center my-[10vh]">Services</h1>

        <div className='flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto gap-[2vh]'>

            <Tilt className='tesgradient w-[90%] mx-auto md:w-[30%] p-[2vh]'>
                <img src="/Images/website.webp" className='w-[10vh]' alt="" />
                <h2 className='text-neutral-300 font-normal text-[3.5vh] my-[1.5vh]'>Website Development</h2>
                <p className='text-neutral-300 text-[2vh] font-normal text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio sapiente voluptatem reiciendis provident fuga nihil qui magnam optio nam.</p>
            </Tilt>

            <Tilt className='appgradient w-[90%] mx-auto md:w-[30%] p-[2vh]'>
                <img src="/Images/mobileapp.webp" className='w-[10vh]' alt="" />
                <h2 className='text-neutral-300 font-normal text-[3.5vh] my-[1.5vh]'>Mobile App Development</h2>
                <p className='text-neutral-300 text-[2vh] font-normal text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio sapiente voluptatem reiciendis provident fuga nihil qui magnam optio nam.</p>
            </Tilt>

            <Tilt className='uigradient w-[90%] mx-auto md:w-[30%] p-[2vh]'>
                <img src="/Images/design.webp" className='w-[10vh]' alt="" />
                <h2 className='text-neutral-300 font-normal text-[3.5vh] my-[1.5vh]'>UI/UX Development</h2>
                <p className='text-neutral-300 text-[2vh] font-normal text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio sapiente voluptatem reiciendis provident fuga nihil qui magnam optio nam.</p>
            </Tilt>

        </div>

    </div>
  )
}
