import React from "react";
import lady from "../../../assets/header/lady-on-pc.png";
import underLine from "../../../assets/header/Vector.png";

const header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="text-center">
        <img src={lady} />
      </div>
      <div className="flex flex-col  items-center justify-around">
        <div></div>
        <div></div>
        <div></div>
        {/*two buttons parent */}
        <div></div>
        {/* all numbers parent */}
        <div></div>
      </div>
    </div>
  );
};

export default header;
