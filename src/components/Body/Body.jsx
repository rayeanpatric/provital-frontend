import React, { useState } from "react";
import SearchSection from "../SearchSection/SearchSection";
import GradientBar from "../GradientBar/GradientBar";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import ImageGallery from "../ImageGallery/ImageGallery";
import LifestylePillars from "../LifestylePillars/LifestylePillars";
import "./Body.scss";

// Carousel 1 images
import doctorConsultation from "../images/carousel1/doctor-consultation.jpg";
import medicalCheckup from "../images/carousel1/medical-checkup.jpg";
import patientCare from "../images/carousel1/patient-care.jpg";
import wellnessTherapy from "../images/carousel1/wellness-therapy.jpg";

// Carousel 2 images
import healthcareTech from "../images/carousel2/healthcare-tech.jpg";
import labAnalysis from "../images/carousel2/lab-analysis.jpg";
import medicalFacility from "../images/carousel2/medical-facility.jpg";
import telemedicine from "../images/carousel2/telemedicine.jpg";

const carousel1Images = [
  { src: doctorConsultation, alt: "Doctor Consultation" },
  { src: medicalCheckup, alt: "Medical Checkup" },
  { src: patientCare, alt: "Patient Care" },
  { src: wellnessTherapy, alt: "Wellness Therapy" },
];

const carousel2Images = [
  { src: healthcareTech, alt: "Healthcare Technology" },
  { src: labAnalysis, alt: "Laboratory Analysis" },
  { src: medicalFacility, alt: "Medical Facility" },
  { src: telemedicine, alt: "Telemedicine Session" },
];

// Example gallery data
const galleryItems = [
  {
    image: require("../images/nutrition.jpg"),
    title: "Nutrition",
    description: "Personalized nutrition plans for optimal health.",
    duration: "30 min",
  },
  {
    image: require("../images/physical-activity.jpg"),
    title: "Physical Activity",
    description: "Guided exercise routines and activity tracking.",
    duration: "45 min",
  },
  {
    image: require("../images/restorative-sleep.jpg"),
    title: "Restorative Sleep",
    description: "Sleep hygiene and restorative sleep programs.",
    duration: "20 min",
  },
];

const Body = () => {
  const [galleryIndex] = useState(0);

  return (
    <main className="body">
      <div className="body__content">
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
              Find the right care for your{" "}
              <span className="body__title-highlight">health journey</span>
            </h1>
            <p className="body__subtitle">
              Connect with experienced healthcare providers who specialize in
              lifestyle medicine and holistic wellness approaches.
            </p>
          </div>

          <SearchSection />
        </div>
      </div>
      <GradientBar />
      <LifestylePillars />
      <ImageGallery items={galleryItems} currentIndex={galleryIndex} />
    </main>
  );
};

export default Body;
