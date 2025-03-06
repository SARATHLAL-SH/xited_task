import React from "react";
import hotdog from "../assets/images/hot dog.png";
import listImg from "../assets/images/list.png";

const Recipes = () => {
  return (
    <div className="bg-[#FAFFF2] flex flex-col items-center md:py-20 py-2 px-6 w-full">
      {/* Main Content Box */}
      <div className="relative flex bg-[#003A60] text-white rounded-lg p-6 items-center w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] md:h-[350px] px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative items-center w-full">
          {/* Column 1: Heading */}
          <div className="col-span-1 flex justify-center sm:justify-start">
            <h2 className="text-[35px] sm:text-[50px] md:text-[65px] font-afterglow text-center w-full">
              Organic & <span className="text-[#f1b24a]">Healthy</span>
            </h2>
          </div>

          {/* Column 2: Hotdog Image */}
          <div className="col-span-1 flex justify-center relative">
            <img
              src={hotdog}
              alt="hot dog"
              className="md:absolute md:h-[590px]  w-[100px] sm:w-[180px] md:w-[250px] lg:w-[449px]  top-[-25vh] sm:top-[-30vh] md:top-[-45vh] z-10"
            />
          </div>

          {/* Column 3: List Image */}
          <div className="col-span-1 flex justify-center sm:justify-end">
            <img
              src={listImg}
              alt="list"
              className="w-[120px] sm:w-[180px] md:w-[232px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Subheading */}
      <p className="font-lato text-[#003A60] mt-16 sm:mt-32 text-[18px] sm:text-[22px] md:text-[25px] text-center">
        Speaking Of Meat From Plants...
      </p>

      {/* Description */}
      <h3 className="font-afterglow text-[#FCB34A] mt-6 text-[24px] sm:text-[40px] md:text-[50px] text-center max-w-[85%] sm:max-w-[70%] leading-[1.3]">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr.
      </h3>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {["BEEF", "SAUSAGE", "CHICKEN"].map((item) => (
          <button
            key={item}
            className="bg-[#0b2b4b] hover:bg-[#f1b24a] w-36 sm:w-40 px-6 py-2 text-white rounded-lg font-semibold shadow-md transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
