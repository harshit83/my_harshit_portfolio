import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import spaceship from "../../public/assets-json/spaceship.json";
import Lottie from 'lottie-react';

export default function HomeSection() {
  const [currentProfession, setCurrentProfession] = useState("");
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    let timeout;

    if (visibleLetters < currentProfession.length) {
      timeout = setTimeout(() => {
        setVisibleLetters((prevVisibleLetters) => prevVisibleLetters + 1);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [visibleLetters, currentProfession]);

  const professions = useMemo(
    () => ["UI/UX Designer", "Web Developer", "App Developer", "Freelancer"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        (professions.indexOf(currentProfession) + 1) % professions.length;
      setCurrentProfession(professions[nextIndex]);
      setVisibleLetters(0);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentProfession, professions]);

  return (
    <div id="home" className="home">

      <div className="svglb absolute">
        <Lottie animationData={spaceship} />
      </div>
      <div className="content">
        
        <h1 className="text-[2.7vh] md:text-[4vh] font-medium my-1 text-white text-center">
          Gaurav Madan
        </h1>
        <h1 className="my-1 profession flex mt-[3vh]">
          {currentProfession.substr(0, visibleLetters)}
          <span
            className={`profession1 typing-cursor ${
              visibleLetters === currentProfession.length ? "blink" : ""
            }`}
          >
            |
          </span>
        </h1>
        <button className="btngradient mt-[3vh] px-[2vh] md:px-[3vh] py-[1vh] my-1 font-semibold text-[2.3vh] md:text-[3vh] text-blue-100">
          <a href="./assets-json/MyResume.pdf" target="_blank">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            My Resume
          </a>
        </button>
      </div>
    </div>
  );
}
