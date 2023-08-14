import "./Main.css";
import Filters from "./Filters/Filters";
import SearchResults from "./SearchResults/SearchResults";

const Main = () => {
  return (
    <div className="middle">
      <Filters />
      <SearchResults />
    </div>
  );
};

export default Main;
