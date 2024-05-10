import Carousel from "../Carousel";

const BestSeries = () => {
  return (
    <div className="mt-20 relative">
      <img
        src="/src/assets/background.PNG"
        className="w-full bg-no-repeat bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl grid place-items-center">
        <h1 className="font-bold text-xl">featured</h1>
        <h1 className="font-bold text-4xl">Best Series</h1>
        <p className="text-lg">News Season 5 Just flown in Watch and debate.</p>
        <Carousel/>
      </div>
    </div>
  );
};

export default BestSeries;
