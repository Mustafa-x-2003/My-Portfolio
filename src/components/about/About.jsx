import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Front-End Developer</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Focus</h5>
              <small>React.js Development</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p>
            I am a Front-End Developer focused on building responsive web
            applications using React.js, JavaScript, HTML, and CSS. I have
            practical experience working on projects such as an E-commerce
            website and a personal portfolio. I focus on improving my skills
            through building real projects and learning modern frontend
            development practices.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
