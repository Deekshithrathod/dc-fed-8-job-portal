import "./Location.css";
import PublicIcon from "@mui/icons-material/Public";

const Location = ({ location }: { location: string }) => {
  return (
    <div className="tag-location">
      <PublicIcon style={{ fontSize: `1.25rem` }} />
      {location}
    </div>
  );
};

export default Location;
