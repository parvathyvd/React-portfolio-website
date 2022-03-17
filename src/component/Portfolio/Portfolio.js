import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
    const images = [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6]
    const data = [{
        id: 1,
        image: IMG1,
        title: 'Demo dummy text and Details',
        github: 'http://github.com/',
        demo: 'http://github.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'What is Lorem Ipsum?',
        github: 'http://github.com/',
        demo: 'http://github.com/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Where does it come from?',
        github: 'http://github.com/',
        demo: 'http://github.com/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Demo dummy can be added more here',
        github: 'http://github.com/',
        demo: 'http://github.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Here is the journey of the lorem',
        github: 'http://github.com/',
        demo: 'http://dribble.com/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Demo dummy text and Details Part 12',
        github: 'http://github.com/',
        demo: 'http://dribble.com/'
    },

]
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
          {data.map((dat,index)=>{
              return(
                <article className="portfolio__item" key={index}>
                <div className="portfolio__item-image">
                    <img src={dat.image} alt="portfolio image" />
                </div>
                <h3>{dat.title}</h3>
                <div className="portfolio__item-cta">
                <a href={dat.github} className="btn" target="_blank">
                    Github
                </a>
                <a
                    href={dat.demo}
                    className="btn btn-primary"
                    target="_blank"
                >
                    Live Demo
                </a>
                    </div>
                
                </article>
              )
          })}
        
      </div>
    </section>
  );
};

export default Portfolio;
