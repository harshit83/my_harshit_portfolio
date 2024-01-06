import React from "react";
import TestimonialCard from "../../elements/TestominialCard";
import Tilt from "react-parallax-tilt";

export default function Testimonials() {
  const testidata = [
    {
      testiImg: "/Images/reenanew.jpg",
      testName: "Reena Verma",
      testPost: "UI/UX Designer",
      testdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga maiores! Totam magni vero natus ea ad? Repellat voluptatibus assumen ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores",
    },
    {
      testiImg: "/Images/sakshi.jpg",
      testName: "Sakshi Bhole",
      testPost: "TE COMP A",
      testdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga maiores! Totam magni vero natus ea ad? Repellat voluptatibus assumen ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores",
    },
  ];

  return (
    <div className="mb-[10vh] h-[80vh]">
      <h1 className="text-[3vh] md:text-[5vh] my-[5vh] mb-[10vh] text-white text-center">
        Testimonials
      </h1>

      <div className="flex">
        {testidata.map((item, index) => (
          <TestimonialCard
            key={index}
            testimonialdesc={item.testdesc}
            testimonialname={item.testName}
            testimonialpost={item.testPost}
            testimonialimg={item.testiImg}
          />
        ))}
      </div>

      {/* <Tilt className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto tesgradient pt-[2vh] p-[1vh] md:p-[4vh] rounded-2xl relative">
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
        <p className="text-[2vh] md:text-[2.8vh] text-white font-medium text-center mb-[6vh]">
          "testimonialdesc".
        </p>
        <div className="absolute left-[32%] -bottom-[40%] md:left-[35%] md:-bottom-[40%]">
          <div className="flex flex-row justify-center items-center">
            <img
              src="/Images/sakshi.jpg"
              className="w-[9vh] md:w-[12vh] mx-auto rounded-full"
              alt=""
            />
          </div>
          <p className="text-[2.5vh] md:text-[3vh] text-white text-center">
            testimonialname
          </p>
          <p className="text-[1.8vh] md:text-[2.3vh] text-gray-200 font-normal text-center">
            testimonialpost
          </p>
        </div>
      </Tilt> */}

    </div>
  );
}
