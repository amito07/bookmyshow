import React from "react";
import { running_movies } from "../../utils/function";

const LatestNews = () => {
  return (
    <>
      <section className="text-center">
        <h1 className="font-bold text-4xl">Latest Movies</h1>
      </section>
      <section>
        <marquee>
          <div className="grid grid-cols-5 md:grid-cols-12 gap-2">
            {/* <marquee>This text will scroll from right to left</marquee> */}
            {running_movies.map((x, i) => (
              <div key={i}>
                <img src={x.image} />
              </div>
            ))}
          </div>
        </marquee>
      </section>
    </>
  );
};

export default LatestNews;
