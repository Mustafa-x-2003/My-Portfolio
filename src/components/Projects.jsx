import React from "react";
import TitleSection from "./TitleSection";
import Card from "./Card";
// Component
function Item({ image, title }) {
  return (
    <Card>
      <div>
        <img src={image} alt="" className="rounded-xl" />
        <h2 className="py-4 text-[20px]"> {title} </h2>
        <div className="flex gap-5 pt-2">
          <a href="#" className="btn">
            Github
          </a>
          <a href="#" className="btn btn-primary">
            Live Demo
          </a>
        </div>
      </div>
    </Card>
  );
}
import por1 from "../assets/portfolio1.jpg";
import por2 from "../assets/portfolio2.jpg";
import por3 from "../assets/portfolio3.jpg";
import por4 from "../assets/portfolio4.jpg";
import por5 from "../assets/portfolio5.png";
import por6 from "../assets/portfolio6.jpg";

const data = [
  { image: por1, title: "Portfolio Item 1" },
  { image: por2, title: "Portfolio Item 2" },
  { image: por3, title: "Portfolio Item 3" },
  { image: por4, title: "Portfolio Item 4" },
  { image: por5, title: "Portfolio Item 5" },
  { image: por6, title: "Portfolio Item 6" },
];
function Projects() {
  return (
    <section>
      <div className="container">
        <TitleSection
          title={{ t: "My Recent Work", style: "text-center" }}
          desc={{ d: "Portfolio", style: "text-center" }}
        />
        <div className="grid grid-cols-3 justify-between gap-10">
          {data.map((i) => {
            return <Item key={i.id} title={i.title} image={i.image} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
