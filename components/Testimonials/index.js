import React, { useRef, useEffect } from "react";
import TestimonialCard from "../../elements/TestominialCard";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]);
import { EffectCoverflow, Pagination } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const totalSlides = 6; // The total number of slides
  const slideInterval = 1500; // 1.5 seconds in milliseconds
  const currentSlideRef = useRef(0); // Use useRef to store the current slide

  useEffect(() => {
    const swiperInstance = swiperRef.current;

    const autoplay = setInterval(() => {
      currentSlideRef.current = (currentSlideRef.current + 1) % totalSlides;
      if (swiperInstance && swiperInstance.slideTo) {
        swiperInstance.slideTo(currentSlideRef.current);
      }
    }, slideInterval);

    return () => {
      clearInterval(autoplay);
    };
  }, []);

  useEffect(()=>{
    AOS.init({});
    AOS.refresh();
    return ()=>{
      AOS.refreshHard();
    }
  },[])


  const testidata = [
    {
      testiImg: "/Images/reenanew.webp",
      testName: "Reena Verma",
      testPost: "UI/UX Designer",
      testdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga maiores! Totam magni vero natus ea ad? Repellat voluptatibus assumen ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores",
    },
    // {
    //   testiImg: "/Images/sakshi.webp",
    //   testName: "Sakshi Bhole",
    //   testPost: "TE COMP A",
    //   testdesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga maiores! Totam magni vero natus ea ad? Repellat voluptatibus assumen ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores",
    // },
    {
      testiImg: "/Images/aditi.webp",
      testName: "Aditi Nikam",
      testPost: "TE CS&E",
      testdesc:
        "Gaurav Madan is an amazing designer who combines good looks and practicality in his work. His designs are not just liked; they are really loved. Gaurav not only helps with projects but also supports and boosts confidence. In the creative world, he is like a shining light, showing the way with his special skills and guidance.",
    },
    {
      testiImg: "/mainlogo.png",
      testName: "Samarth Krupa",
      testPost: "Agro tourism",
      testdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga maiores! Totam magni vero natus ea ad? Repellat voluptatibus assumen ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores ddolorum eius repellendus esse odio aperiam! Deserunt minus veritati asperiores",
    },
    {
      testiImg: "/Images/ayush.webp",
      testName: "Ayush Lahoti",
      testPost: "CEO - Bunchup",
      testdesc:
        "Believing in Gaurav has been an absolute relief, as he possess a remarkable combination of Technical Skills and Creative Ideation. His dedication makes unrealistic deadlines realistic. This makes him undoubtedly best at his work.",
    },
    {
      testiImg: "/Images/anu.webp",
      testName: "Anushri Khadke",
      testPost: "TE COMP A",
      testdesc:
        "I have the pleasure of personally seeing Gaurav's dedication to excellence. The only qualities that can match their constant work ethic are their natural grace and respect for others. Gaurav is a valuable member to any development team because they bring not only coding expertise but also a special combination of hard work and sensitivity",
    },
  ];

  return (
    <div className="mb-[10vh]">
      <h1 data-aos="fade-right" className="text-[3vh] md:text-[5vh] my-[5vh] text-white text-center">
        Testimonials
      </h1>

      <div data-aos="zoom-in-right" className="w-[100%] mx-auto py-[5vh] md:p-[5vh]">
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }} // For mobile, 1 card visible
          spaceBetween={10}
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // autoplay={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
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

    </div>
  );
}
