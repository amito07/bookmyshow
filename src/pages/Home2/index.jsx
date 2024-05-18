import Banner from "../../components/Banner";
import BoxOffice from "../../components/BoxOffice";
import FeatureMovies from "../../components/FeatureMovies";
import PopularMovieSection from "../../components/PopularMovies";
import BestSeries from "../../components/PopularMovies/BestSeries";
import TrandingMovies from "../../components/PopularMovies/TrandingMovies";
const Home2 = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <FeatureMovies />
      <PopularMovieSection />
      <BoxOffice />
      <TrandingMovies />
      <BestSeries />
    </div>
  );
};

export default Home2;
