import React from "react";
import "./segment.css";
const Segment = () => {
  return (
    <div className="segment-parent xl:mx-12 2xl:mx-24">
      <div className="mar-x mb-20 xl:mb-40 relative">
        {/* element below is the blue Rectangle over the over one */}
        <div className="h-60 mb-16 thin-border rounded-lg bg-cusDarkBlue sectionRounder">
          {/* this div contains texts and manage them the texts on top */}
          <div className="flex justify-between items-center  mx-3 md:mx-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-3">
                <div className="bg-flash"></div>
                <p className=" text-xl">دسته بندی دوره ها</p>
              </div>

              <p className="mb-4 text-sm tracking-wider max-w-lg lg:max-w-2xl ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            {/* this bitch only shows up in tablet or higher screens as figma showed */}
            <div className="hidden md:block">
              <a href="#">
                <button>
                  مشاهده دوره‌ها
                  <span className="background-props bg-arrow bg-arrow-w"></span>
                </button>
              </a>
            </div>
          </div>

          {/* this div is parent for all Cubes */}
          <div className="flex justify-center items-center lg:mt-7 ">
            {/* cube; map?*/}
            <div className=" bg-cube font-semibold flex flex-col px-7 py-5 gap-2.5 rounded-md xl:px-9 xl:py-7 ">
              <div className="bg-rocket bg-img w-16 h-10"></div>
              <div>جای متن </div>
            </div>

            {/* cube element end here */}
          </div>
        </div>
        {/* div to show bejind other one  */}
        <div className="h-60 shy-div -rotate-2 sectionRounder"></div>
      </div>
    </div>
  );
};

export default Segment;
