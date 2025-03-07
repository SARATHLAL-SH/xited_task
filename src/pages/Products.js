import React from "react";
import sausageImg from "../assets/images/withfork.png";
import greenCirlceImg from "../assets/images/greenCircle.png";
import leaf1 from "../assets/images/leaf1.png";
import leaf2 from "../assets/images/leaf2.png";
import leaf3 from "../assets/images/leaf3.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";

const Products = () => {
  return (
    <section className="relative w-full bg-white pt-0">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 "></div>

      {/* Main Container */}
      <div className="container mx-auto px-4 lg:px-8 relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Section - Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Green Circle Background */}
          <img
            src={greenCirlceImg}
            alt="Background Circle"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[666px] h-auto"
          />

          {/* Sausage Image */}
          <img
            src={sausageImg}
            alt="Sausage"
            className="absolute top-[10px] w-[250px] sm:w-[350px] md:w-[450px] lg:w-[666px] h-auto 
             transition-transform duration-300 ease-in-out hover:rotate-12"
          />

          {/* Leaf Decoration */}
          <img
            src={leaf1}
            alt="Leaf"
            className="absolute bottom-[10px] left-5 w-[40px] sm:w-[60px] lg:w-[94px] h-auto"
          />
        </div>

        {/* Right Section - Text */}
        <div className="relative w-full lg:w-1/2 text-center lg:text-left px-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-lato text-[#003A60] font-semibold">
            Mission & Vision
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-afterglow text-[#003A60] mt-2 leading-tight">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr.
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-afterglow text-[#003A60]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <img
            src={leaf3}
            alt="Leaf"
            className="absolute animate-fall-and-rotate delay-1 bottom-[-10%] sm:bottom-[-30vh] right-5 w-[40px] sm:w-[60px] lg:w-[94px] h-auto z-10"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-0 w-full bg-[#FAFFF2] md:py-32 py-12">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {/* Icon 1 */}
          <div className="relative flex flex-col items-center">
            <img
              src={icon1}
              alt="Icon"
              className="w-[100px] sm:w-[130px] lg:w-[167px] h-[133px] transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-lato text-[#003A60] mt-4">
              Lorem ipsum
            </h4>
            <p className="text-sm sm:text-base lg:text-lg font-lato text-[#003A60]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
            <img
              src={arrow1}
              alt="Arrow"
              className="hidden md:block absolute right-[-10vw] top-[-20%] w-[150px] sm:w-[200px] lg:w-[243px] h-auto"
            />
          </div>

          {/* Icon 2 */}
          <div className="relative flex flex-col items-center">
            <img
              src={icon2}
              alt="Icon"
              className="w-[100px] sm:w-[130px] lg:w-[167px] h-[133px] transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-lato text-[#003A60] mt-4">
              Lorem ipsum
            </h4>
            <p className="text-sm sm:text-base lg:text-lg font-lato text-[#003A60]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
            <img
              src={arrow2}
              alt="Arrow"
              className=" hidden md:block absolute right-[-11vw] top-[5vh] w-[150px] sm:w-[200px] lg:w-[248px] h-auto"
            />
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col items-center">
            <img
              src={icon3}
              alt="Icon"
              className="w-[100px] sm:w-[130px] lg:w-[167px] h-[133px] transition-transform duration-300 hover:scale-110"
            />
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl font-lato text-[#003A60] mt-4">
              Lorem ipsum
            </h4>
            <p className="text-sm sm:text-base lg:text-lg font-lato text-[#003A60]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
          </div>
        </div>

        {/* Floating Leaf */}
        <img
          src={leaf2}
          alt="Leaf"
          className="absolute animate-fall-and-rotate delay-2 top-[-10vh] right-[50vw] sm:right-[20vw] lg:right-[35vw] w-[40px] sm:w-[60px] lg:w-[94px] h-auto z-10"
        />
      </div>
    </section>
  );
};

export default Products;
