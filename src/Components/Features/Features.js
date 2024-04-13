import React from 'react';
import "./Features.css"; 
import { FcLike } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { IoIosBookmark } from "react-icons/io";

function Features() {
  return (
    <section id="features" className="page__features features">
      <div className="features__container">
        <div className="features__header-block header-block header-block--margin">
          <div className="header-block__label">FEATURES <IoIosBookmark /> </div>
          <h2 className="header-block__title">What You Can Do?</h2>
        </div>
        <div className="features__items">
          <div className="features__item">
            <div className="features__icon">
            <FcApproval className="features__icon"/>
            </div>
            <h4 className="features__title">We guarantee our work</h4>
            <div className="features__text">
            Our road transport experts have niche experience in advising
              businesses, individuals, and even trade associations on legal
              matters relating to the transport industry.            </div>
          </div>
          <div className="features__item">
            <div className="features__icon">
            <FcComboChart className="features__icon"/>
            </div>
            <h4 className="features__title">Fixed prices and no surprises</h4>
            <div className="features__text">
            Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing.            </div>
          </div>
          <div className="features__item">
            <div className="features__icon">
            <FcLike className="features__icon"/>
            </div>
            <h4 className="features__title">We listen, suggest, and update</h4>
            <div className="features__text">
            Developments in case law can mean that what was legal yesterday,
              is not necessary legal today. It can often be difficult for
              businesses to keep up to speed with the latest changes.            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
