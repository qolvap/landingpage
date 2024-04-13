import React from 'react';
import "./Service.css"; 
import { RiServiceLine } from "react-icons/ri";

function Service() {
  return (
    <section id="services" className="page__services services">
      <div className="services__container">
        <div className="services__header-block header-block header-block--margin">
          <div className="header-block__label">SERVICES <RiServiceLine /> </div>
          <h2 className="header-block__title">The Services for You</h2>
        </div>
        <div className="services__items">
          <article className="services__item">
            <div className="services__content">
              <div className="services__body">
                <h4 className="services__title"><span>Assistance </span> during the inspection & <span>Buisness advice</span>!
                </h4>
                <div className="services__text">
                  <p>
                  Our lawers assists you at the time of the inspection to provide the legal help and an advice
                  </p>
                  <p>
                  Professional advice for running the transportation buisness
                  </p>
                </div>
              </div>
            </div>
            <div className="services__image">
              <img src="/Images/Introducing-the-age-of-the-accountant.jpeg" className="services__picture" alt="Image" />
            </div>
          </article>
          <article className="services__item">
            <div className="services__content">
              <div className="services__body">
                <h4 className="services__title">
                  Accounting drivers <span>time</span> based on <span>Transport Law</span>
                </h4>
                <div className="services__text">
                  <p>
                    Settlement of drivers' working time based on the analysis of data from tachograph charts
                  </p>
                  <p>
                  Professional record of drivers' working time & transport consulting
                  </p>
                </div>
              </div>
            </div>
            <div className="services__image">
              <img src="/Images/types-of-lorry-artic.jpeg" className="services__picture" alt="Image" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Service;