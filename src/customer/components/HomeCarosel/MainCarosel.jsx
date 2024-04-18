import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCaroselData";

const MainCarosel = () => {
  const items = MainCarouselData.map((item, index) => (
    <img
      className="cursor-pointer"
      src={item.image}
      role="presentation"
      key={index}
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCarosel;
