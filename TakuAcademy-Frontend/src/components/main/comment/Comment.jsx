import React from "react";
import "./comment.css";

const Comment = () => {
  return (
    <div className="comment-parent flex flex-col lg:flex-row justify-center items-center">
      {/* what people say */}
      <div className="flex flex-col justify-center items-center lg:items-start gap-8 max-w-md lg:max-w-sm 2xl:max-w-xl">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-3xl ">
            کاربران درباره ما چه می‌گویند؟
          </div>
          <div className="bg-under ms-4 bg-under w-72 h-4"></div>
        </div>
        <div>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.
        </div>
        <button className="arrow-btn bg-gradient flex justify-center items-center gap-2 py-3 px-5 rounded-lg max-w-xs">
          <p> همین حالا شروع کنید</p>
          <div className="bg-arrow bg-arrow-w"></div>
        </button>
      </div>

      <div className="relative">
        {/* blueCube */}
        <div className="h-80 thin-border max-w-2xl p-5 rounded-lg bg-cusDarkBlue rounded-20">
          {/* place for comment */}
          <div className="flex justify-between items-center  mx-3 md:mx-6">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <p className=" text-xl">commenter information </p>{" "}
                {/* rating */}
                <div>react-rating</div>
              </div>

              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است."react-slick"
              </div>
            </div>
          </div>
          {/* comment finish here */}

          {/* these two element below me are the two lightBlue divs behindcomment */}
          <div className="h-80 shy-div-comment -rotate-3 opacity-70 rounded-lg" />
          <div className="h-80 shy-div-comment -rotate-6 opacity-50 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
