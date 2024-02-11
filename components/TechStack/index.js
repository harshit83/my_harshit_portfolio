import React, { useState,useEffect } from "react";
import Frontend from "./frontend";
import Backend from "./backend";
import Others from "./others";

import AOS from "aos";
import "aos/dist/aos.css";

export default function TechStack() {

  const [selected, setSelected] = useState("frontend");
  const handleTabChange = (tab) => {
    setSelected(tab);
  };

  useEffect(()=>{
    AOS.init({});
    AOS.refresh();
    return ()=>{
      AOS.refreshHard();
    }
  },[])

  return (
    <div className="mb-[7vh]">
      <h2 data-aos="fade-left" data-aos-duration="400" className="text-white text-[3vh] md:text-[5vh] font-semibold text-center my-[10vh]">Tech Stack</h2>
      <div data-aos="zoom-in" data-aos-duration="800" className="techgradient border border-gray-700 rounded-xl flex flex-row justify-center items-center w-fit mx-auto">
        <div
          onClick={() => handleTabChange("frontend")}
          className={`${
            selected === "frontend"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-white"
          } py-[1.5vh] px-[2vh] md:px-[4vh] rounded-l-md focus:outline-none transition duration-300 cursor-pointer text-[2.2vh] md:text-[2.5vh]`}
        >
          Frontend
        </div>
        <div
          onClick={() => handleTabChange("backend")}
          className={`${
            selected === "backend"
              ? "bg-purple-500 text-white"
              : "bg-transparent text-white"
          } py-[1.5vh] px-[2vh] md:px-[4vh]  focus:outline-none transition duration-300 cursor-pointer text-[2.2vh] md:text-[2.5vh]`}
        >
          Backend
        </div>
        <div
          onClick={() => handleTabChange("others")}
          className={`${
            selected === "others"
              ? "bg-pink-500 text-white"
              : "bg-transparent text-white"
          } py-[1.5vh] px-[2vh] md:px-[4vh] rounded-r-md focus:outline-none transition duration-300 cursor-pointer text-[2.2vh] md:text-[2.5vh]`}
        >
          Others
        </div>
      </div>
      {selected === "frontend" && <Frontend />}
      {selected === "backend" && <Backend />}
      {selected === "others" && <Others />}
    </div>
  );
}
