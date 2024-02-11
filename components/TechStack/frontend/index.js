import React,{useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Frontend() {

  const frontend=[
    {frontendImg:"/Images/icons/htmk.webp"},
    {frontendImg:"/Images/icons/css.webp"},
    {frontendImg:"/Images/icons/js.webp"},
    {frontendImg:"/Images/icons/tailwind.webp"},
    {frontendImg:"/Images/icons/python.webp"},
    {frontendImg:"/Images/icons/reactn.webp"},
    {frontendImg:"/Images/icons/react.webp"},
    {frontendImg:"/Images/icons/nextjs.jpg"},
  ]

  useEffect(()=>{
    AOS.init({});
    AOS.refresh();
    return ()=>{
      AOS.refreshHard();
    }
  },[])

  return (
    <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
      <h2 data-aos="fade-left" className="text-white text-center text-[3.4vh] my-[5vh]">Frontend</h2>
      <div data-aos="zoom-in" data-aos-duration="800" className="flex flex-row flex-wrap justify-center items-center gap-[2vh]">

      {frontend.map((item)=>(
        <img 
          src={item.frontendImg} 
          className="w-[12vh] h-[12vh] md:h-[20vh] md:w-[20vh] object-cover rounded-xl" alt="" 
        />
      ))}

      </div>
    </div>
  );
}
