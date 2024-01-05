import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ imageSrc, videoLink, githubLink }) => {
  return (
    <div className="project-card-wrapper">
      <Tilt className="project-card relative">
        <img src={imageSrc} alt="" className="w-[90vw] mx-auto md:w-[50vh]" />
        <div className="project-link flex flex-row">
          {videoLink && (
            <Link href={videoLink} className="a">
                <FontAwesomeIcon
                    icon="fa-solid fa-video"
                    className="text-[5vh] mr-[2vh]"
                />
            </Link>
          )}  
          {githubLink && (
            <Link href={githubLink} className="a">
                <FontAwesomeIcon 
                    icon={faGithub} 
                    className="text-[5vh]" 
                />
            </Link>
          )}
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;