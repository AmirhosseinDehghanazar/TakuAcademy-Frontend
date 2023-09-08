import React from "react";
import { CustomNumeralNumericFormat } from "../../numeric";
import taha from "../../../assets/card/taha-khoshgele.png";

const Card = ({ course }) => {
  return (
    <div className="max-w-sm thin-border rounded-xl overflow-hidden shadow-lg">
      <img className="w-full" src={course.img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        {/* type and time  */}
        <div className="flex justify-between items-center">
          <p className="text-md">
            <CustomNumeralNumericFormat value={course.time} /> ساعت آموزش
          </p>
          <button className="">{course.type}</button>
        </div>
        {/* title */}
        <p className="py-5 text-xl font-semibold">{course.title}</p>

        {/* teacher detail */}
        <div className="flex gap-5 justify-around items-center border-y-2 border-y-neutral-700 py-2">
          <img className="w-10" src={taha} />
          <div className="flex flex-col">
            <p>طاها جیگر</p>
            <p className="text-xs">فرانت اند دولپر در ماکروسافت</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 pb-2">
          <div>
            <button className="flex items-center bg-gradient px-3 py-3">
              مشاهده و اطلاعات بیشتر <div className="bg-arrow bg-arrow-w"></div>
            </button>
          </div>
          <div className="flex justify-between items-center gap-1">
            <CustomNumeralNumericFormat
              value={course.price}
              thousandSeparator
            />
            <span> تومان </span>
          </div>
        </div>
      </div>
      {/* price and moreinfo */}
    </div>
  );
};

export default Card;
