import React from "react";
import Header from "../../components/Header";
import SliderComponent from "../../components/Slider";
import ShowMovies from "../../components/ShowMovie";

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
    </>
  );
};

export default Home;
