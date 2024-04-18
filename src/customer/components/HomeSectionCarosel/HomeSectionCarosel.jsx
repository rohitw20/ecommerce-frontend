import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} item={item} />);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = (e) => setActiveIndex(e.item);

  return (
    <div className="">
      <h2 className=" text-2xl font-extrabold">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          // disableButtonsControls
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              backgroundColor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeft
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )} */}

        {/* {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              backgroundColor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeft
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
