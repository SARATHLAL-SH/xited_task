import React from 'react';

const Buttons = ({ text, bgColor, hoverColor, onClick }) => {
  return (
    <button
      className={`w-full md:w-40 px-6 py-3 bg-[${bgColor}] font-lato text-white rounded-lg shadow hover:bg-[${hoverColor}]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Buttons;