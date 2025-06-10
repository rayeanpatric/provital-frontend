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
export const carousel1Images = [
  { src: doctorConsultation, alt: "Doctor providing lifestyle consultation" },
  { src: medicalCheckup, alt: "Comprehensive medical checkup" },
  { src: patientCare, alt: "Personalized patient care" },
  { src: wellnessTherapy, alt: "Holistic wellness therapy" },
];

export const carousel2Images = [
  { src: healthcareTech, alt: "Modern healthcare technology" },
  { src: labAnalysis, alt: "Advanced laboratory analysis" },
  { src: medicalFacility, alt: "State-of-the-art medical facility" },
  { src: telemedicine, alt: "Virtual telemedicine consultation" },
];

// Combined images for mobile view
export const allImages = [...carousel1Images, ...carousel2Images];
