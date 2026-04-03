import React from "react";
import me from "../assets/me-about.jpg";
import { FaMedal } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import Card from "./Card";
import TitleSection from "./TitleSection";
// component
function Item({ title, desc, icon }) {
  return (
    <Card width={'w-1/3'}>
      <div className="flex flex-col items-center ">
        <span className="py-5 text-[2.5rem] text-(--color-primary) )">
          {icon}
        </span>
        <h2 className="text-(--color-wight)">{title}</h2>
        <p className="text-(--color-light) text-[14px] py-1.5">{desc}</p>
      </div>
    </Card>
  );
}
const data = [
  {id:0, title: "Experience", description: "3+ years working", icon: <FaMedal /> },
  {id:1, title: "Experience", description: "3+ years working", icon: <FaMedal /> },
  {id:2, title: "Experience", description: "3+ years working", icon: <FaMedal /> },
];
function About() {
  return (
    <section id="About" className="About  mt-10 ">
      <div className="container text-center ">

        <TitleSection title={{t:'Get To Know',style:''}} desc={{d:'About Me',style:''}}/>

        <div className="flex w-full justify-between ">
          <div className="w-1/3 rounded-3xl bg-linear-to-br from-(--color-primary) via-transparent to-(--color-primary)">
            <img
              src={me}
              alt=""
              className="rounded-3xl  rotate-10 hover:rotate-0 transition-(--transition)"
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <div className="flex justify-between gap-4">
              {data.map((i) => {
                return (
                  <Item key={i.id} title={i.title} desc={i.description} icon={i.icon} />
                );
              })}
            </div>

            <p className="text-(--color-light) text-[18px] text-start py-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              recusandae praesentium, quibusdam ipsa libero quae quisquam
              adipisci saepe, inventore consectetur, odio ad deserunt porro.
              Vitae necessitatibus eius sint iste repellendus?
            </p>
            
            <a href="#" className="btn btn-primary self-start">
              Let's Talk
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
