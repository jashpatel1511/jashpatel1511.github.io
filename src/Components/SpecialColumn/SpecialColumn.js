import React from "react";
import Column from "../../Layout/Column";
import Row from "../../Layout/Row";
import OneTimeTypeAnimation from "../OneTimeTypeAnimation/OneTimeTypeAnimation";

function SpecialColumn({ symbol, title, descriptionHeading, description }) {
  return (
    <Row className="special-row">
      <Column
        flexType="row"
        justify="start"
        className={"align-items-center gap-3 special-border special-column"}
      >
        <p className="mid_fonts">&#123;{symbol}&#125;</p>
        <OneTimeTypeAnimation
          color={"blue"}
          size={"mid"}
          text={title}
          //   texts={[title]}
          time={1.5}
        />
      </Column>
      <Column className={"special-border py-4"}>
        {descriptionHeading !== "" ? (
          <p className="yellow_color small_fonts">
            &#47;&#47;{descriptionHeading}
          </p>
        ) : (
          <></>
        )}
        <p
          className="white_color vsmall_fonts"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </Column>
    </Row>
  );
}

export default SpecialColumn;
