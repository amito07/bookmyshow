import React from "react";
import Header from "../../components/Header";
import SliderComponent from "../../components/Slider";
import ShowMovies from "../../components/ShowMovie";
import LatestNews from "../../components/LatestNews";

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
    </>
  );
};

export default Home;
