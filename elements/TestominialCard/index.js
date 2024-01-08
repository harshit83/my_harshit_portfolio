import React from "react";
import Tilt from "react-parallax-tilt";

const TestimonialCard = ({
  testimonialimg,
  testimonialdesc,
  testimonialname,
  testimonialpost,
}) => {
  return (
    <>
      <Tilt className=" mx-auto tesgradient pt-[2vh] p-[1vh] md:p-[4vh] rounded-2xl relative">
        <img
          src="/Images/inverted.png"
          className="absolute -left-[7%] -top-[10%] md:-left-[4%] md:-top-[10%] w-[5vh]"
          alt=""
        />
        <img
          src="/Images/invertedr.png"
          className="absolute -right-[7%] -bottom-[10%] md:-right-[4%] md:-bottom-[10%] w-[5vh]"
          alt=""
        />
        <p className="text-[2vh] select-none md:text-[2.5vh] text-white font-medium text-center mb-[4vh]">
          "{testimonialdesc}".
        </p>
        <div className="absolute left-[32%] -bottom-[50%] md:left-[30%] lg:left-[35%] md:-bottom-[40%]">
          <div className="flex flex-row justify-center items-center">
            <img
              src={testimonialimg}
              className="w-[9vh] md:w-[10vh] mb-[1vh] mx-auto rounded-full"
              alt=""
            />
          </div>
          <p className="text-[2.5vh] md:text-[3vh] text-white text-center">
            {testimonialname}
          </p>
          <p className="text-[1.8vh] md:text-[2.3vh] text-gray-200 font-normal text-center">
            {testimonialpost}
          </p>
        </div>
      </Tilt>
    </>
  );
};

export default TestimonialCard;
