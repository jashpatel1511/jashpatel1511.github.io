import React from "react";
import SpecialColumn from "../SpecialColumn/SpecialColumn";

function AllExperience() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center services mt-5">
      <SpecialColumn
        title={"Agevole"}
        symbol={"Mar 2024 - Present"}
        description={
          "Designed and developed a custom order management dashboard for TM Fragrance, enabling real-time inventory tracking and automation. Optimized database performance to boost processing efficiency by 50%, handling 1,000+ daily transactions worth ₹10 million. Reduced manual errors by 30%, enhancing workflow and client satisfaction."
        }
        descriptionHeading={"Web Developer (Remote)"}
      />
      <SpecialColumn
        title={"Opus Technologies"}
        symbol={"Jan 2024 - Feb 2024"}
        description={
          "Developed a high-performance stock data platform for NSE India, automating CSV extraction and real-time insights. Designed a scalable database to improve query efficiency by 30% with 99.9% data accuracy. Optimized the data pipeline, cutting processing time by 40% for faster stock analysis."
        }
        descriptionHeading={"Full-Stack web Developer (contract base)"}
      />
      <SpecialColumn
        title={"Aphelios Solution"}
        symbol={"Jul 2023 - Nov 2023"}
        description={
          "Developed a cross-platform mobile app for buying and selling second-hand vehicles using React Native and Firebase, accelerating the listing process by 30%. Conducted user research and A/B testing, enhancing UI/UX and boosting engagement by 25%. Optimized performance with lazy loading and code splitting, reducing startup time by 40% for a seamless Android and iOS experience."
        }
        descriptionHeading={"Front-end Application Developer"}
      />
    </div>
  );
}

export default AllExperience;
