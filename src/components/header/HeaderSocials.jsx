import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";



function HeaderSocials() {
  return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/mustafa-sami-780a19332?utm_source=share_via&utm_content=profile&utm_medium=member_android" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/Mustafa-x-2003" target='_blank'><FaGithub /></a>
            <a href="https://driblle.com" target='_blank'><FaDribbble /></a>
        </div>
  )
}

export default HeaderSocials