import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
function HomeSocials() {
  return (
    <div className="container ">
      <span className="hidden  md:flex flex-col gap-4 absolute left-0 bottom-12.5 text-[25px]  after:absolute after:w-[1px] after:left-[50%] after:transform after:translate-x-[-50%] after:top-30 after:h-8 after:bg-(--color-primary)  ">
        <a href="#" target="_blank">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank">
          <FaGithub className="" />
        </a>
        <a href="#" target="_blank">
          <FaDribbble />
        </a>
      </span>

      <a
        href="About"
        
        className="absolute animate-scroll  -right-8.75 bottom-20 text-[25px] "
      >
        <FaAngleDoubleDown/>
      </a>
    </div>
  );
}

export default HomeSocials;
