import React from "react";
import Title from "../Title/Title";
import Row from "../../Layout/Row";
import Column from "../../Layout/Column";
import { Image } from "react-bootstrap";
import agevole from "../../Assets/agevole.png";
import LinkButton from "../LinkButton/LinkButton";
import OneTimeTypeAnimation from "../OneTimeTypeAnimation/OneTimeTypeAnimation";

function ExperienceHome() {
  return (
    <>
      <Title
        symbol={"!"}
        title={"experience"}
        discription={
          "... a snapshot of my career evolution, marked by growth, leadership, and innovation."
        }
      />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Row>
          <Column className="align-items-center py-2">
            <Image
              src={agevole}
              className="w-50"
              style={{
                filter: "invert(1)",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </Column>
          <Column className="py-2">
            <div className="d-flex flex-row align-items-center">
              <OneTimeTypeAnimation
                text={"//Agevole"}
                color={"blue"}
                size={"avg"}
                time={2}
              />
              <p className=" yellow_color font-italic small_fonts mb-2">
                {"{Mar 2024 - Present}"}
              </p>
            </div>
            <div>
              <p
                className="small_fonts"
                dangerouslySetInnerHTML={{
                  __html:
                    "As a <span class='blue_color'><u>Full-Stack Developer (Remote)</u></span> at Agevole Innovation, I led the end-to-end development of scalable web platforms across sales, customer support, and media streaming domains. I built a custom order management system that streamlined operations for high-volume transactions, developed a ticketing platform that significantly improved support efficiency, and architected a video processing pipeline that automated content delivery for an OTT service. My work <span class='sky_blue_color'>improved system performance, reduced operational costs</span>, and <span class='sky_blue_color'>enhanced user experience across all platforms</span> through thoughtful design, automation, and optimization.",
                }}
              ></p>
            </div>
          </Column>
        </Row>
        <LinkButton
          to={"/experience"}
          content={"read_more"}
          className={"mt-4"}
        />
      </div>
    </>
  );
}

export default ExperienceHome;
