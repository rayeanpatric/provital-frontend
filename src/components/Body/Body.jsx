import React from "react";
import SearchSection from "../SearchSection/SearchSection";
import GradientBar from "../GradientBar/GradientBar";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import HorizontalCarousel from "../HorizontalCarousel/HorizontalCarousel";
import LifestylePillars from "../LifestylePillars/LifestylePillars";
import "./Body.scss";

// Import carousel images
import doctorConsultation from "../images/carousel1/doctor-consultation.jpg";
import medicalCheckup from "../images/carousel1/medical-checkup.jpg";
import patientCare from "../images/carousel1/patient-care.jpg";
import wellnessTherapy from "../images/carousel1/wellness-therapy.jpg";
import healthcareTech from "../images/carousel2/healthcare-tech.jpg";
import labAnalysis from "../images/carousel2/lab-analysis.jpg";
import medicalFacility from "../images/carousel2/medical-facility.jpg";
import telemedicine from "../images/carousel2/telemedicine.jpg";

// Define carousel image arrays
const carousel1Images = [
  { src: doctorConsultation, alt: "Doctor providing lifestyle consultation" },
  { src: medicalCheckup, alt: "Comprehensive medical checkup" },
  { src: patientCare, alt: "Personalized patient care" },
  { src: wellnessTherapy, alt: "Holistic wellness therapy" },
];

const carousel2Images = [
  { src: healthcareTech, alt: "Modern healthcare technology" },
  { src: labAnalysis, alt: "Advanced laboratory analysis" },
  { src: medicalFacility, alt: "State-of-the-art medical facility" },
  { src: telemedicine, alt: "Virtual telemedicine consultation" },
];

// Combined images for mobile view
const allImages = [...carousel1Images, ...carousel2Images];

const Body = () => {
  return (
    <main className="body">
      <section className="hero-section">
        <div className="body__content">
          {/* Desktop Vertical Carousels */}
          <div className="body__carousels">
            <div className="body__carousel-container">
              <VerticalCarousel images={carousel1Images} direction="down" />
            </div>
            <div className="body__carousel-container">
              <VerticalCarousel images={carousel2Images} direction="up" />
            </div>
          </div>

          <div className="body__main-content">
            <div className="body__hero">
              <h1 className="body__title">
                Book an appointment with{" "}
                <span className="body__title-highlight">
                  lifestyle medicine
                </span>{" "}
                experts
              </h1>
              <p className="body__subtitle">
                Optimize your lifestyle and reverse chronic diseases.
              </p>
            </div>
            <SearchSection />
          </div>
        </div>

        {/* Gradient Bar */}
        <GradientBar />

        {/* Mobile Horizontal Carousel */}
        <HorizontalCarousel images={allImages} />
      </section>

      {/* Lifestyle Pillars Section */}
      <section className="lifestyle-section">
        <LifestylePillars />
      </section>
    </main>
  );
};

export default Body;
