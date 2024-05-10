import Carousel from "../Carousel";

const BoxOffice = () => {
  return (
    <div className="mt-20">
      <h1 className="text-white text-4xl font-bold uppercase">
        TOP 10 BOX OFFICE
      </h1>
      <div className="border-4 w-16 border-red-600"></div>
      <Carousel />
    </div>
  );
};

export default BoxOffice;
