import React, { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./LifestylePillars.scss";
import {
  HeartEcgIcon,
  GradientHeartIcon,
  MoonIcon,
  StressHeartIcon,
  SocialHeartIcon,
  ClockIcon
} from "../GradientIcons/GradientIcons";

// Import images
import nutritionImg from "../images/nutrition.jpg";
import physicalActivityImg from "../images/physical-activity.jpg";
import restorativeSleepImg from "../images/restorative-sleep.jpg";
import stressManagementImg from "../images/stress-management.jpg";
import socialConnectionImg from "../images/social-connection.jpg";
import substanceAbuseImg from "../images/substance-abuse.jpg";

const LifestylePillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pillars = [
    {
      image: nutritionImg,
      title: "Nutrition",
      description:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",      duration: <div className="duration-wrapper"><HeartEcgIcon /><span>121/80 mmHg</span></div>,
    },
    {
      image: physicalActivityImg,
      title: "Physical activity",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      duration: <div className="duration-wrapper"><GradientHeartIcon /><span>32 minutes</span></div>,
    },
    {
      image: restorativeSleepImg,
      title: "Restorative sleep",
      description:
        "Consistent, quality sleep is essential for cognitive function and physical health.",      duration: <div className="duration-wrapper"><MoonIcon /><span>8 hours</span></div>,
    },
    {
      image: stressManagementImg,
      title: "Stress management",
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
      duration: <div className="duration-wrapper"><StressHeartIcon /><span>15 minutes</span></div>,
    },
    {
      image: socialConnectionImg,
      title: "Social connection",
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",      duration: <div className="duration-wrapper"><SocialHeartIcon /><span>1 hour</span></div>,
    },
    {
      image: substanceAbuseImg,
      title: "Substance abuse",
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      duration: <div className="duration-wrapper"><ClockIcon /><span>45 minutes</span></div>,
    },
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((current) => current + 1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePillarClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);

    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleNavClick = (direction) => {
    setIsPaused(true);
    if (direction === "prev") {
      setActiveIndex((current) => current - 1);
    } else {
      setActiveIndex((current) => current + 1);
    }
    setTimeout(() => setIsPaused(false), 10000);
  };

  const mod = (n, m) => ((n % m) + m) % m;
  const displayIndex = mod(activeIndex, pillars.length);

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= pillars.length; i++) {
      const index = mod(displayIndex + i, pillars.length);
      items.push(pillars[index]);
    }
    return items;
  };

  return (
    <section className="lifestyle-pillars">
      <div className="lifestyle-pillars__header">
        <h2 className="lifestyle-pillars__title">
          <span
            style={{
              color: "#666666",
              display: "block",
              fontSize: "0.5em",
              marginBottom: "0.5rem",
              fontWeight: "normal",
            }}
          >
            HOW IT WORKS
          </span>
          <span className="text-primary">
            <i>Lifestyle as medicine: </i>
          </span>
          <span className="text-secondary">The six pillars</span>
        </h2>
        <div className="lifestyle-pillars__navigation">
          <button
            className="lifestyle-pillars__nav-button"
            onClick={() => handleNavClick("prev")}
            aria-label="Previous pillar"
          >
            <b>←</b>
          </button>
          <button
            className="lifestyle-pillars__nav-button"
            onClick={() => handleNavClick("next")}
            aria-label="Next pillar"
          >
            <b>→</b>
          </button>
        </div>
      </div>
      <div className="lifestyle-pillars__pills">
        {pillars.map((pillar, index) => (
          <button
            key={pillar.title}
            className={`lifestyle-pillars__pill ${
              index === displayIndex ? "active" : ""
            }`}
            onClick={() => handlePillarClick(index)}
          >
            {pillar.title}
          </button>
        ))}
      </div>
      <ImageGallery
        items={getVisibleItems()}
        currentIndex={1} // Always show from index 1 since we add buffer items
      />
    </section>
  );
};

export default LifestylePillars;
