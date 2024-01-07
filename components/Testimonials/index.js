import React from "react";
import TestimonialCard from "../../elements/TestominialCard";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Autoplay]);
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
    {
      testiImg: "/Images/aditi.jfif",
      testName: "Aditi Nikam",
      testPost: "TE CS&E",
      testdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga maiores! Totam magni vero natus ea ad? Repellat voluptatibus assumen ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores",
    },
    {
      testiImg: "/Images/ayush.jfif",
      testName: "Ayush Lahoti",
      testPost: "CEO - Bunchup",
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
    {
      testiImg: "/Images/anu.jpg",
      testName: "Anushri Khadke",
      testPost: "TE COMP A",
      testdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga maiores! Totam magni vero natus ea ad? Repellat voluptatibus assumen ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores",
    },
  ];

  return (
    <div className="mb-[10vh]">
      <h1 className="text-[3vh] md:text-[5vh] my-[5vh] text-white text-center">
        Testimonials
      </h1>

      <div className="w-[100%] mx-auto p-[5vh]">
      <Swiper
        slidesPerView={1} // For mobile, 1 card visible
        spaceBetween={10}
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={true}
        coverflowEffect={{
          rotate:50,
          stretch:0,
          depth:100,
          modifier:1,
          slideShadows:true,
        }}
        pagination={true}
        modules={[EffectCoverflow,Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 3, // For desktop, 3 cards visible
            spaceBetween: 20,
          },
        }}
        className="mySwiper h-[70vh]"
      >
        {testidata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-[4vh] py-[10vh]">
              <TestimonialCard
                testimonialdesc={item.testdesc}
                testimonialname={item.testName}
                testimonialpost={item.testPost}
                testimonialimg={item.testiImg}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>  
      </div>

      {/* <Tilt className=" mx-auto tesgradient pt-[2vh] p-[1vh] md:p-[4vh] rounded-2xl relative">
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
        <p className="text-[2vh] md:text-[2.5vh] text-white font-medium text-center mb-[4vh]">
          "{testimonialdesc}".
        </p>
        <div className="absolute left-[32%] -bottom-[40%] md:left-[35%] md:-bottom-[40%]">
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
      </Tilt> */}


    </div>
  );
}
