import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Social from "./HeaderSocials";
import "./header.css";
import { FaAngleDoubleDown } from "react-icons/fa";
function Header() {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Mustafa Sami</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <CTA />
        <Social />

        <div class="card" id="card">
          <div class="content">
            <div className="me">

            <img src={ME} alt=""  />
            </div>
          </div>
        </div>

        <a href="#about" className="scroll_down">
          <FaAngleDoubleDown />
        </a>
      </div>
    </header>
  );
}

export default Header;
