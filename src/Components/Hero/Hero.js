import React from 'react';
import "./Hero.css"; 

function Hero() {
  return (
    <main id="hero" className="page">
      <section className="page__hero hero">
        <div className="hero__container">
          <div className="hero__content content-hero">
            <h1 className="content__title">Take care of the <a href="#">safety of</a> Your company</h1>
            <div className="content-hero__text">
              <p>
              Save Your time with our Experts
              </p>
            </div>
            <a href="#contact" className="content-hero__button">Contact us →</a>
          </div>
          <div className="hero__images images-hero">
            <a href="#" className="images-hero__item images-hero__item--01">
              <img src="/Images/truck.jpeg" className="images-hero__image" alt="Image" />
            </a>
            <a href="#" class="images-hero__item images-hero__item--02">
              <img src="/Images/calc.webp" className="images-hero__image" alt="Image" />
            </a>
            <a href="#" class="images-hero__item images-hero__item--03">
              <img src="/Images/analyst.webp" className="images-hero__image" alt="Image" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
