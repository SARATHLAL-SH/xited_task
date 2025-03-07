import React from "react";
import bg from "../assets/images/bg.png";
import burgerImg from "../assets/images/brger.png";
import shadow from "../assets/images/shadow.png";
import bgImage from "../assets/images/BgRectangle.png";
import bgOverLay from "../assets/images/bg.png";
import rightLeaf from "../assets/images/rightleaf.png";
import leftLeaf from "../assets/images/leftLeaf.png";
import  bgcurve from "../assets/images/bgCurv.png";

const About = () => {
  return (
    <div className="relative overflow-hidden w-full">
    <div
      className="relative flex flex-col md:flex-row w-full min-h-screen gap-5 justify-between  items-center  px-6 md:px-12 bg-cover bg-center bg-no-repeat pb-20"
      style={{ backgroundImage: `url(${bgOverLay})`}}
    >
   <img
    src={bgImage}
    alt="Overlay"
    className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-10"
  />

      {/* Left Section */}
      <div className="flex relative z-20 flex-col items-start max-w-full md:max-w-[50%] text-left">
        <p className="text-[25px] pt-6 md:pt-12 font-lato text-[#003A60]">
          Lorem ipsum dolor sit amet
        </p>
        <p className="text-[40px] md:text-[75px] font-lato text-[#003A60] mt-2 md:mt-4 leading-[1.2]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <p className="text-[18px] md:text-[20px] font-lato text-[#003A60] mt-2 md:mt-4 leading-[1.4]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-12 items-center w-full md:w-full mt-6">
          <button className="w-full md:w-40 px-6 py-3 bg-[#0A472E] font-lato text-white rounded-lg shadow hover:bg-[#FCB34A]">
            Discover More
          </button>
          <button className="w-full md:w-40 px-6 py-3 bg-[#0A472E] font-lato text-white rounded-lg shadow hover:bg-[#FCB34A]">
            Find us
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full relative z-20 md:w-[50%]  flex flex-col justify-center items-center md:pt-12 pt-24 md:mt-0">
  {/* ✅ Left Leaf - Scales Proportionally */}
  <img
    src={leftLeaf}
    alt="Left Leaf"
    className="absolute left-[0vw] sm:left-[-2vw] md:left-[2vw] top-[52%] transform -translate-y-1/2 rotate-[270deg]
               w-[50%] sm:w-[50%] md:w-[50%] max-w-[400px] aspect-auto"
  />

  {/* ✅ Right Leaf - Scales Proportionally */}
  <img
    src={rightLeaf}
    alt="Right Leaf"
    className="absolute right-[-4vw] sm:right-[-2vw] md:right-[-0vw] top-[45%] transform -translate-y-1/2 rotate-45 
               w-[50%] sm:w-[50%] md:w-[50%] max-w-[400px]  aspect-auto"
  />

  {/* ✅ Burger Image - Responsive Scaling */}
  <img
    src={burgerImg}
    alt="Burger"
    className="relative rounded-lg bg-transparent w-[95%] sm:w-[85%] md:w-[75%] max-w-[698px] h-auto z-20 animate-bounce"
  />

  {/* ✅ Shadow Image - Responsive Width */}
  <img
    src={shadow}
    alt="Shadow"
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[85%] md:w-[75%] max-w-[698px] h-auto"
  />
</div>


    </div>
    <div className="w-full overflow-hidden ">
<img
  src={bgcurve}
  alt="Background Curve"
  className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-[110vw] max-w-none h-[5vh]  object-fit z-40 "
/>
</div>
    </div>
  );
};

export default About;
