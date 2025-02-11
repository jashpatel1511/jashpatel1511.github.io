import React from "react";
import SpecialColumn from "../SpecialColumn/SpecialColumn";

function AllServices() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4 services">
      <SpecialColumn
        title={"Dalhousie University "}
        symbol={"Sept 2024 - Present"}
        description={
          "<span title='Master in applied computer science' class='blue_color'>{MACS}</span> A highly intelligent and driven student, currently pursuing my degree with outstanding academic performance.<span class='yellow_color'>Recognized for my exceptional capabilities, I was promoted by the former Dean, enabling me to complete my program in one semester less than the standard duration.</span> My strong analytical skills, quick learning ability, and dedication to excellence set me apart in my academic journey."
        }
        descriptionHeading={""}
      />
      <SpecialColumn
        title={"Gujarat Technological University"}
        symbol={"2020-2024"}
        description={
          "<span class='blue_color'>{Bachelor of Computer Science}</span> A highly intelligent and ambitious student, I pursued my Bachelor's degree with exceptional academic performance and a strong passion for technology. My ability to grasp complex concepts quickly, combined with strong analytical skills and a dedication to innovation, set me apart throughout my academic journey."
        }
        descriptionHeading={""}
      />
    </div>
  );
}

export default AllServices;
