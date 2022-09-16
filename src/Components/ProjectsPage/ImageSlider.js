import { Card } from "@mui/material";
import { useState } from "react";

const slideStyles = {
  width: '10%',
  height: "10%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-27px",
  fontSize: "45px",
  color: '#2e201f' ,
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-27px",
  fontSize: "45px",
  color: '#2e201f',
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",

};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(slides[currentIndex].width);
  const [height, setHeight] = useState(slides[currentIndex].height);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setWidth(slides[newIndex].width)
    setHeight(slides[newIndex].height)
  };
  
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setWidth(slides[newIndex].width)
    setHeight(slides[newIndex].height)
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setWidth(slides[slideIndex].width)
    setHeight(slides[slideIndex].height)
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    width: width,
    height: height,
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  console.log(slides[currentIndex].width)

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      {slides[currentIndex].type == "video" && <iframe width= {width} height = {height} style = {{borderRadius: '10px'}} allowFullScreen src = {`https://www.youtube.com/embed/${slides[currentIndex].url}`}> </iframe>}
      {slides[currentIndex].type == "image" && <div  style={slideStylesWidthBackground}></div>}
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
