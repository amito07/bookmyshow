import {
  PlayIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Carousel from "../Carousel";
import Header2 from '../../components/Header2'


const Banner = () => {
  return (
    <div className="relative">
    <Header2/>
    <div className="banner">
      <div className="content active">
        <img src="/src/assets/title.png" alt="" className="movie-title" />
      <h4>
        <span>2023</span>
        <span>
          <i>12+</i>
        </span>
        <span>2h 14mins</span>
        <span>Romance</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        nobis vitae sequi consequatur, quisquam ducimus ipsum dolore. Soluta
        temporibus officia beatae exercitationem repellendus quasi magni,
        inventore adipisci. Officiis, sit odio.
      </p>
      <div className="button">
        <a href="#">
          {" "}
          <PlayIcon className="w-6 h-6" /> Watch
        </a>
        <a href="#">
          {" "}
          <PlusCircleIcon className="w-6 h-6" /> My List
        </a>
      </div>
      </div>
      <div className="carousel-box">
        <Carousel/>
      </div>
    </div>
    </div>
  );
};

export default Banner;
