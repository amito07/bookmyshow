import React from "react";
import { Carousel } from "react-responsive-carousel";
import { sliderList } from "../../utils/function";

const SliderComponent = () => {
  return (
    <Carousel>
      {sliderList().map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} />
            <p className="legend">{item.name}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default SliderComponent;
