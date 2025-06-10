import React, { useState, useEffect } from "react";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import GradientBar from "../GradientBar/GradientBar";
import HorizontalCarousel from "../HorizontalCarousel/HorizontalCarousel";
import SearchSection from "../SearchSection/SearchSection";
import "./Hero.scss";

const Hero = () => {
  const [screenSize, setScreenSize] = useState({
    isDesktop: window.innerWidth > 1024,
    isTablet: window.innerWidth <= 1024 && window.innerWidth >= 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isDesktop: window.innerWidth > 1024,
        isTablet: window.innerWidth <= 1024 && window.innerWidth >= 768,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="hero">
      <div className="hero__layout">
        {screenSize.isDesktop ? (
          <div className="hero__carousels">
            <div className="hero__carousel-container">
              <VerticalCarousel direction="down" />
            </div>
            <div className="hero__carousel-container">
              <VerticalCarousel direction="up" />
            </div>
          </div>
        ) : (
          <div
            className={`hero__mobile-carousel ${
              screenSize.isTablet ? "hero__mobile-carousel--tablet" : ""
            }`}
          >
            <HorizontalCarousel />
          </div>
        )}

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
        </div>
      </div>

      <div className="hero__search-overlay">
        <SearchSection />
      </div>

      <GradientBar />
    </section>
  );
};

export default Hero;
