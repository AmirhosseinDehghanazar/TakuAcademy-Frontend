import React from "react";

const Numbers = ({ number, subject }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="font-semibold ">
          <CustomNumeralNumericFormat value={number} />+
        </span>
        <div className="background-props bg-underLine"></div>
        <div className="text-sm whitespace-nowrap my-2">{subject}</div>
      </div>
    </div>
  );
};

export default Numbers;
