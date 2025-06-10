import React from "react";
import SearchSection from "../SearchSection/SearchSection";
import GradientBar from "../GradientBar/GradientBar";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import HorizontalCarousel from "../HorizontalCarousel/HorizontalCarousel";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__layout">
        <div className="hero__carousels">
          <div className="hero__carousel-container">
            <VerticalCarousel direction="down" />
          </div>
          <div className="hero__carousel-container">
            <VerticalCarousel direction="up" />
          </div>
        </div>

        <div className="hero__main">
          <div className="hero__content">
            <h1 className="hero__title">
              Book an appointment with{" "}
              <span className="hero__title-highlight">lifestyle medicine</span>{" "}
              experts
            </h1>
            <p className="hero__subtitle">
              Optimize your lifestyle and reverse chronic diseases.
            </p>
          </div>
          <SearchSection />
        </div>
      </div>
      <GradientBar />
      <HorizontalCarousel />
    </section>
  );
};

export default Hero;
