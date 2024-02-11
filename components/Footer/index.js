import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {

  useEffect(()=>{
    AOS.init({});
    AOS.refresh();
    return ()=>{
      AOS.refreshHard();
    }
  },[])
  
  return (
    <div data-aos="zoom-in" className="my-[6vh] mt-[14vh] select-none">
      <div  className="text-center text-[3vh] md:text-[3.5vh] font-medium text-neutral-100 mb-[2vh]">
        Connect me on
      </div>
      <div className="flex flex-row justify-center items-center my-[2vh]">

        <a href="https://www.instagram.com/gauravmadan2004/" target="_blank">
          <img
            src="/instagram.webp"
            className="w-[7vh] md:w-[10vh] hover:scale-125 transition-all"
            alt=""
          />
        </a>

        <a href="https://www.linkedin.com/in/gauravdev04/" target="_blank">
          <img
            src="/linkedin.webp"
            className="w-[7vh] md:w-[10vh] hover:scale-125 transition-all"
            alt=""
          />
        </a>

        <a href="https://wa.me/919689675896" target="_blank">
          <img
            src="/whatsapp.webp"
            className="w-[7vh] md:w-[10vh] hover:scale-125 transition-all"
            alt=""
          />
        </a>

        <a href="mailto:gauravmadan2004@gmail.com">
          <img
            src="/gmail.webp"
            className="w-[7vh] md:w-[10vh] hover:scale-125 transition-all"
            alt=""
          />
        </a>

        <a href="https://github.com/gauravmad">
          <img
            src="/github.webp"
            className="w-[7vh] md:w-[10vh] hover:scale-125 transition-all"
            alt=""
          />
        </a>

      </div>
      <p  data-aos="zoom-in" className="text-stone-300 text-[2vh] md:text-[2.5vh] text-center font-normal">
        CopyRight @2024 Gaurav Madan, All rights reserved
      </p>
      <div className="flex flex-row justify-center items-center gap-[1vh]">
        <p className="text-center text-cyan-500 text-[1.8vh] md:text-[2.3vh] font-normal my-[1.5vh]">Designed and Developed with </p>
        <img className="w-[4vh]" src="/heart.webp" alt="" />
      </div>
    </div>
  );
}
