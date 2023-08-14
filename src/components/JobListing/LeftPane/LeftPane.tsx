import "./LeftPane.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const LeftPane = () => {
  return (
    <div className="left-pane">
      <div className="back-btn">
        <TrendingFlatIcon style={{ transform: `scaleX(-1)` }} /> Back to search
      </div>
      <div className="instructions">
        <SectionHeading headingText="How To Appy" />
        <p>
          Please email a copy of your resume and online portfolio to
          <a> Recuiter</a> from the company & CC your
          <a> referrer</a>
        </p>
      </div>
    </div>
  );
};

export default LeftPane;
