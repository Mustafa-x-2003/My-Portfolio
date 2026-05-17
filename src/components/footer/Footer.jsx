import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Mustafa Sami
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/share/18EuTa1CsF/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/mustafa_x_sami?igsh=MWtrYXp1NGF1OHhueQ==" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://driblle.com" target="_blank">
          <FaXTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; <a href="#">Mustafa Sami</a> All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
