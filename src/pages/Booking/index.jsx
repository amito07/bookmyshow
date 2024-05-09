import Header2 from "../../components/Header2";

const Booking = () => {
  return (
    <>
      <Header2 />
      <div className="absolute top-40 w-full h-full">
        <div className="grid grid-cols-12">
          <div className="col-span-2 border-2">
            <img src="/src/assets/movies/ant man.jpg" className="w-full" />
            <div className="text-white p-5">
              <h6 className="font-test text-sm font-bold">Directed by</h6>
              <p className="font-test text-lg mb-4">Peyton Reed</p>
              <h6 className="font-test text-sm font-bold">Screenplay by</h6>
              <p className="font-test text-xl mb-4">Edgar Wright, Joe Cornish, Adam McKay, Paul Rudd</p>
              <h6 className="font-test text-sm font-bold">Release dates</h6>
              <p className="font-test text-xl mb-4">June 29, 2015</p>
              <h6 className="font-test text-sm font-bold">Running time</h6>
              <p className="font-test text-xl">117 minutes</p>
            </div>
          </div>
          <div className="col-span-10 border-2">
            <h1 className="text-white">2nd Part</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
