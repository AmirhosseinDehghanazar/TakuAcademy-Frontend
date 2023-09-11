import React from "react";
import { CustomNumeralNumericFormat } from "../../../numeric";
import taha from "../../../../assets/card/taha-khoshgele.png";
import "./card.css";

const Card = ({ course }) => {
  return (
    <div className="card bg-card mx-auto thin-border rounded-xl overflow-hidden shadow-lg">
      {/* course thumbnail */}
      <img className="w-full" src={course.img} alt="Sunset in the mountains" />
      <div className="px-6 py-4 card-body">
        {/* type and time  */}
        <div className="flex justify-between items-center">
          <p className="text-gray-300/90">
            <CustomNumeralNumericFormat value={course.time} /> ساعت آموزش
          </p>
          <button className="bg-type">{course.type}</button>
        </div>
        {/* title */}
        <p className="py-5 text-xl font-semibold ">{course.title}</p>

        <div className="card-footer">
          {/* teacher detail */}
          <div className="flex gap-2 justify-start items-center teacher-detail py-2 md:py-3 lg:py4 xl:py-5">
            <img className="w-10 md:w-12 lg:w-14 xl:w-16" src={taha} />
            <div className="flex flex-col">
              <p>طاها جیگر</p>
              <p className="text-xs">فرانت اند دولپر در ماکروسافت</p>
            </div>
          </div>

          {/* price and more info */}
          <div className="flex items-center justify-between gap-2 -mx-2 pt-4 pb-2">
            <div>
              <button className="flex rounded-lg whitespace-nowrap text-sm lg:arrow-btn items-center bg-gradient px-1 py-3">
                مشاهده و اطلاعات بیشتر{" "}
                <div className="bg-arrow bg-arrow-w"></div>
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
      </div>
      {/* price and moreinfo */}
    </div>
  );
};

export default Card;
