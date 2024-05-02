import Header from "../../components/Header";
import SliderComponent from "../../components/Slider";
import ShowMovies from "../../components/ShowMovie";
import LatestNews from "../../components/LatestNews";
import Gallery from "../../components/Gallery";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <SliderComponent />
      </section>
      <section>
        <ShowMovies />
      </section>
      <section>
        <LatestNews/>
      </section>
      <section>
        <Gallery/>
      </section>
    </>
  );
};

export default Home;
