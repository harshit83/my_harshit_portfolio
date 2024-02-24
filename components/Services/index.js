import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div id="services" className="overflow-hidden">
      <h1
        data-aos="fade-right"
        data-aos-duration="700"
        className="text-white text-[3vh] md:text-[5vh] font-semibold text-center my-[10vh]"
      >
        Services
      </h1>

      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto gap-[2vh]">
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          className="w-[90%] mx-auto md:w-[30%]"
        >
          <Tilt className="tesgradient p-[2vh]">
            <div data-aos="flip-left" data-aos-duration="700">
              <img src="/Images/website.webp" className="w-[10vh]" alt="" />
              <h2 className="text-neutral-300 font-normal text-[3.5vh] my-[1.5vh]">
                Website Development
              </h2>
              <p className="text-neutral-300 text-[2vh] font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                odio sapiente voluptatem reiciendis provident fuga nihil qui
                magnam optio nam.
              </p>
            </div>
          </Tilt>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          className="w-[90%] mx-auto md:w-[30%]"
        >
          <Tilt className="appgradient p-[2vh]">
            <div>
              <img src="/Images/mobileapp.webp" className="w-[10vh]" alt="" />
              <h2 className="text-neutral-300 font-normal text-[3.5vh] my-[1.5vh]">
                Mobile App Development
              </h2>
              <p className="text-neutral-300 text-[2vh] font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                odio sapiente voluptatem reiciendis provident fuga nihil qui
                magnam optio nam.
              </p>
            </div>
          </Tilt>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
          className="w-[90%] mx-auto md:w-[30%] "
        >
          <Tilt className="uigradient p-[2vh]">
            <div>
              <img src="/Images/design.webp" className="w-[10vh]" alt="" />
              <h2 className="text-neutral-300 font-normal text-[3.5vh] my-[1.5vh]">
                UI/UX Development
              </h2>
              <p className="text-neutral-300 text-[2vh] font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                odio sapiente voluptatem reiciendis provident fuga nihil qui
                magnam optio nam.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
