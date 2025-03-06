import React, { useState, useEffect } from "react";
import carosalImg1 from "../assets/images/carosal1.png";
import carosalImg2 from "../assets/images/carosal2.png";
import carosalImg3 from "../assets/images/carosal3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Dummy images (replace with your actual image paths)
const images = [
  carosalImg1,
  carosalImg2,
  carosalImg3,
  carosalImg1,
  carosalImg2,
  carosalImg3,
];

// Captions for each image
const captions = [
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  "Sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
  "At vero eos et accusam et justo duo dolores et ea rebum.",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  "Sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
  "At vero eos et accusam et justo duo dolores et ea rebum.",
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  return (
    <div className="bg-[#FAFFF2] pb-12 px-6 w-full">
     
      {/* Image Carousel */}
      <div className="relative mt-0 max-w-4xl mx-auto flex items-center">
        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-[-4vw] top-1/3 transform -translate-y-1/2 text-[#FCB34A] text-[25px] p-2 rounded-full z-10 hover:bg-[#0b2b4b] transition-colors duration-300"
        >
          <IoIosArrowBack />
        </button>

        {/* Image Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-[33.33%] p-2 flex flex-col items-center text-center"
              >
                <img
                  src={image}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
                <p className="mt-4 text-[#003A60] text-[20px] font-lato">
                  {captions[index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-[-4vw] top-1/3 transform -translate-y-1/2 text-[#FCB34A] text-[25px] p-2 rounded-full z-10 hover:bg-[#0b2b4b] transition-colors duration-300"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Blog;
