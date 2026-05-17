import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Item 1",
    github: "https://github.com/Mustafa-x-2003/E-commerce-React",
    demo: "https://e-commerce-react-eta-sage.vercel.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} target="_blank" className="btn" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
