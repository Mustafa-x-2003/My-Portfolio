import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { CgFigma } from "react-icons/cg";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import TitleSection from "./TitleSection";
import Card from "./Card";
// Skill Item component
function ItemSkill({ title, desc, icon }) {
  return (
    <div className="flex gap-4 items-center border border-(--color-bg-variant) rounded-xl p-2">
      <span className="flex w-17 h-17 items-center justify-center rounded-xl bg-(--color-bg-variant) text-[36px]">
        {icon}
      </span>
      <span>
        <h2>{title} </h2>
        <h4> {desc}</h4>
      </span>
    </div>
  );
}
const items = [
  { id: 0, title: "CSS", descraptiin: "User Interface", icon: <FaCss3Alt /> },
  { id: 1, title: "JavaScript", descraptiin: "Interaction", icon: <FaJs /> },
  { id: 2, title: "React", descraptiin: "Framework", icon: <FaReact /> },
  { id: 3, title: "TailwindCSS", descraptiin: "User Interface", icon: <RiTailwindCssFill /> },
  { id: 4, title: "NodeJS", descraptiin: "Web Server", icon: <IoLogoNodejs /> },
  { id: 5, title: "Figma", descraptiin: "Design tool", icon: <CgFigma /> },
  { id: 6, title: "ExpressJS", descraptiin: "Node Framework", icon: <SiExpress /> },
  { id: 7, title: "MongoDB", descraptiin: "Database", icon: <DiMongodb /> },
];
function Skills() {
  return (
    <section>
      <div className="container">
        <TitleSection title={{t:'What Skills I Have',style:'text-center'}} desc={{d:'My Expreience',style:'text-center'}}/>
        <div className="grid grid-cols-4 gap-4">
          {items.map((item)=>{
            return <ItemSkill key={item.id} title={item.title} desc={item.descraptiin} icon={item.icon}/>
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
