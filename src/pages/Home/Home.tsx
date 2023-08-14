import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Search from "../../components/Search/Search";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
