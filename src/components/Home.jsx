import React from "react";
import me from "../assets/me.png";
import CV from "../assets/cv.pdf"
import HomeSocials from "./HomeSocials";

function Home() {
  return (
    <div className="pt-25 h-screen  relative container">
      <div className=" text-center  ">
        <h4 className="text-[27px]">Hello I'm</h4>
        <h1>Mustafa Samy</h1>
        <h4 className="text-light text-[27px] pb-2">Frontend Developer</h4>
        <div className="flex gap-4 justify-center pt-5">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="w-82.5 h-100 bg-linear-to-b from-(--color-primary) to-transparent rounded-t-full m-auto mt-10 p-[5rem_1.5rem_1.5rem_1.5rem]">
          <img src={me}/>
        </div>
          <HomeSocials/>
      </div>
    </div>
  );
}

export default Home;
