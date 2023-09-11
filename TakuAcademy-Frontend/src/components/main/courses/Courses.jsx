import Buttons from "./Buttons";
import "./courses.css";
import data from "./cardsData";
import Eclipse from "../../../assets/card/Eclipse.svg";
import React, { useState } from "react";
import Card from "./card/Card";

const Courses = () => {
  const [value, setValue] = useState(0);

  const buttonsData = [
    { index: 0, name: "برنامه نویسی" },
    { index: 1, name: " المبیاد" },
    { index: 2, name: "لورم ایسیوم " },
    { index: 3, name: "لورم ایسیوم" },
  ];

  const valueHandler = (index) => {
    setValue(index);
  };

  return (
    <div className="mar-x">
      {/* text & type of courses buttons */}

      <div className="flex flex-col justify-between xl:justify-around items-center type-text-div md:flex-row ">
        <div className="flex flex-col items-start ">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-flash"></div>

            <p className="text-2xl">دوره‌های برگزیده آکادمی تاکو</p>
          </div>
          <img
            src={Eclipse}
            alt=""
            className="absolute hidden md:inline-block right-0 pointer-events-none -z-10 "
          />
          <p className="mt-5 text-md leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className="max-w-xs md:max-w-md lg:max-w-lg py-2 px-2 h-16 whitespace-nowrap overflow-x-auto overflow-y-hidden gap-8 thin-border filterSearchRounder">
          {buttonsData.map((btn) => (
            <Buttons
              key={btn.index}
              valueHandler={valueHandler}
              index={btn.index}
              value={value}
            >
              {btn.name}
            </Buttons>
          ))}
        </div>
      </div>

      {/* courses */}
      <div className="grid 2xl:mx-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:gap-x-0 pt-10">
        {data.map((course, i) => (
          <Card key={i} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
