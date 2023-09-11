import React from "react";

// this component manage which button is active and depends on that tak action
const Buttons = ({ index, value, valueHandler, children }) => {
  return (
    <button
      onClick={() => valueHandler(index)}
      // checking if btn is clicked if so we give it the css needed
      className={`${
        index === value ? "bg-gradient py-3 px-4" : "px-7"
      } rounded-xl inline-block overflow-hidden`}
    >
      {children}
    </button>
  );
};

export default Buttons;
