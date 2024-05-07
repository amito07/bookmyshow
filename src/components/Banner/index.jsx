import {
  PlayIcon,
  PlusCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

const Banner = () => {
  return (
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
      <div></div>
      <a href="#">
        {" "}
        <PlayCircleIcon className="w-6 h-6" />
        Watch Trailer
      </a>
      <ul>
        <a href="#">
          {" "}
          <PlayCircleIcon className="w-6 h-6" />
          Facebook
        </a>

        <a href="#">
          {" "}
          <PlayCircleIcon className="w-6 h-6" />
          Youtube
        </a>

        <a href="#">
          {" "}
          <PlayCircleIcon className="w-6 h-6" />
          Twitter
        </a>
      </ul>
    </div>
  );
};

export default Banner;
