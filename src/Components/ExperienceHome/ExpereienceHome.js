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
                    "<span class='blue_color'><u>Web Developer(Remote)</u>&nbsp;</span> Independently designed and developed a custom order management dashboard for TM Fragrance, enabling real-time inventory tracking and automated order processing. By implementing database indexing, query optimization, and caching strategies, I increased order processing efficiency by 50%, allowing the system to seamlessly <span class='sky_blue_color'>handle over 1,000 daily transactions worth ₹10 million</span>. The scalable and intuitive system significantly <span class='sky_blue_color'>reduced manual order errors by 30%</span>, enhancing client satisfaction and streamlining workflow automation.",
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
