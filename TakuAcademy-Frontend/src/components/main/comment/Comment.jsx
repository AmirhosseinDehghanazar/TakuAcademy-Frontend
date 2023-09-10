import React from "react";

const Comment = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {/* what people say */}
      <div className="flex flex-col gap-4">
        <div>
          <div>کاربران درباره ما چه می‌گویند؟</div>
          <div className="bg-under"></div>
        </div>
        <div>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.
        </div>
        <button className="flex items-center gap-2">
          <p> همین حالا شروع کنید</p>
          <div className="bg-arrow bg-arrow-white"></div>
        </button>
      </div>
      {/* comments */}
      <div></div>
    </div>
  );
};

export default Comment;
