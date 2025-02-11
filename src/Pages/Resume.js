import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "../Layout/BaseLayout";
import PageStarting from "../Components/PageStarting/PageStarting";
import AllExperience from "../Components/AllExperience/AllExperience";
import ContactBottom from "../Components/ContactBottom/ContactBottom";

function Resume() {
  return (
    <BaseLayout>
      <PageStarting
        title={"experience"}
        disSize={"vsmall"}
        discription={
          "... a snapshot of my career evolution, marked by growth, leadership, and innovation."
        }
      />
      <AllExperience />
      <ContactBottom />
    </BaseLayout>
  );
}

export default Resume;
