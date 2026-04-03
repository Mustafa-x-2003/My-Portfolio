import React from "react";
import Card from "./Card";
import TitleSection from "./TitleSection";

// Icons
import { FaPencilRuler } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
// component

function Item({ title, desc, icon }) {
  return (
    <Card width={"p-10"}>
      <div>
        <span className="text-6xl block mb-8">{icon}</span>
        <h2 className="text-[24px] pb-2">{title}</h2>
        <p className="text-(--color-light)">{desc}</p>
      </div>
    </Card>
  );
}

const data = [
  {
    icon: <FaPencilRuler/>,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?",
  },
  {
    icon: <LuCodeXml/>,
    title: "Fast Performance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?",
  },
  {
    icon: <BsFillRocketTakeoffFill/>,
    title: "Clean Code",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?",
  },
];

function Services() {
  return (
    <section>
      <div className="container">
        <TitleSection
          title={{ t: "What I Offer", style: "text-center" }}
          desc={{ d: "Services", style: "text-center" }}
        />
        <div className="flex justify-between gap-4">
          {data.map((i) => {
            return (
              <Item
                key={i.id}
                title={i.title}
                desc={i.description}
                icon={i.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
