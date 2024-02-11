import React,{useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Backend() {

  const backend=[
    {backendImg:"/Images/icons/express.webp"},
    {backendImg:"/Images/icons/js.webp"},
    // {backendImg:"/Images/icons/django.png"},
    {backendImg:"/Images/icons/mysql.webp"},
    {backendImg:"/Images/icons/mongo-db.webp"},
    
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
      <h2 data-aos="fade-left" className="text-white text-center text-[3.4vh] my-[5vh]">Backend</h2>
      <div data-aos="zoom-in" data-aos-duration="800" className="flex flex-row flex-wrap justify-center items-center gap-[2vh]">

      {backend.map((item)=>(
        <img 
          src={item.backendImg} 
          className="w-[12vh] h-[12vh] md:h-[20vh] md:w-[20vh] object-cover rounded-2xl" alt="" 
        />
      ))}

      </div>
    </div>
  );
}
