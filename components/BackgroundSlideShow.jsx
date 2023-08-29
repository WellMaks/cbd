"use client";
import { useState, useEffect } from "react";

const images = ["/images/bg1.webp", "/images/bg2.webp", "/images/bg3.webp"];

const BackgroundSlideShow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div key={index} className="slider-image-wrapper">
          <img
            className={`slider-image ${index === currentImage ? "active" : ""}`}
            src={image}
            alt={`Image ${index + 1}`}
          />
          <div className="slider-overlay"></div>
        </div>
      ))}
    </div>
  );
};
export default BackgroundSlideShow;
