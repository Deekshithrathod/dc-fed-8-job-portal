import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import JobListing from "../../components/JobListing/JobListing";
import Main from "../../components/Main/Main";
import Search from "../../components/Search/Search";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      {/* <JobListing /> */}
      <Search />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
