import React from "react";

const Buttons = ({ index, value, valueHandler, children }) => {
  return (
    <button
      onClick={() => valueHandler(index)}
      className={
        index === value
          ? "bg-gradient rounded-xl py-3 px-4 inline-block "
          : "px-7"
      }
    >
      {children}
    </button>
  );
};

export default Buttons;
