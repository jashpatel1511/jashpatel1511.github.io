import React from "react";
import ProjectElement from "../ProjectElement/ProjectElement";
import communedrop from "../../Assets/communedrop.png";
import smartgroc from "../../Assets/SmartGroc.png";
import docushare from "../../Assets/DocuShare.png";
import easeprof from "../../Assets/EaseProf.png";
import livelocation from "../../Assets/livelocation.png";
import AButton from "../LinkButton/AButton";

function PortfolioProject() {
  const data = [
    {
      image: communedrop,
      title: "CommuneDrop",
      discription:
        "🚗 CommuneDrop is a scalable, microservices-based ride-booking platform for transporting goods with real-time tracking, secure inter-service communication via Identity Server, and Kafka-powered async messaging. Deployed on AWS with Kubernetes.",
      code_link: "https://github.com/JASH-PATEL-6566/CommuneDrop",
      //   live_link: "https://github.com/JASH-PATEL-6566/MyProtfolio",
    },
    {
      image: smartgroc,
      title: "SmartGroc",
      discription:
        "🛒 SmartGroc is an intelligent grocery management app that uses barcode scanning, receipt OCR, and AI-powered recipe generation to reduce food waste and improve household meal planning. Built with React Native & Firebase.",
      code_link: "https://github.com/JASH-PATEL-6566/SmartGroc",
    },
    {
      image: docushare,
      title: "DocuShare",
      discription:
        "DocuShare is a cloud-native SaaS for secure file sharing. 🔒 Generate password-protected links with expiry, view/download limits, and full access tracking. Built with Next.js, Express.js, TypeScript, AWS. ⚡ Auto-cleans expired files via Lambda for security.",
      code_link: "https://github.com/JASH-PATEL-6566/DocuShare",
    },
    {
      image: livelocation,
      title: "Live Location- npm 📦",
      discription:
        "live-location-client is a lightweight frontend library that streams GPS coordinates via WebSocket, perfect for delivery apps and dashboards. 🚚 live-location-service offers a WebSocket server with Kafka, authentication, and custom broadcasting for scalable real-time updates. 🌍 Both packages support TypeScript, easy integration, and error handling. ⚙️",
      code_link: "https://github.com/JASH-PATEL-6566/npm-live-location",
      live_link: "https://www.npmjs.com/~jash-patel",
    },
    {
      image: easeprof,
      title: "EaseProf",
      discription:
        "This website helps you enhance your GitHub profile effortlessly. ✨ With just a few clicks and simple copy-paste—no coding required—you can make your profile stand out and look professional in minutes. Perfect for developers looking to showcase their work!",
      code_link: "https://github.com/JASH-PATEL-6566/EaseProf",
      live_link: "https://easeprof.netlify.app/",
    },
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {data.map((item, index) => (
        <ProjectElement
          image={item.image}
          title={item.title}
          discription={item.discription}
          code_link={item.code_link}
          live_link={item.live_link}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
      <AButton
        to={"https://github.com/JASH-PATEL-6566?tab=repositories"}
        content={"read_more"}
      />
    </div>
  );
}

export default PortfolioProject;
