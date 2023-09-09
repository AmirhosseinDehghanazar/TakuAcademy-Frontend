import React from "react";
import "./question.css";
import question from "../../../assets/question/question.png";

const Question = () => {
  return (
    <div className="flex mar-x flex-col-reverse question-parent justify-center items-center lg:flex-row my-24">
      {/* image element */}
      <div>
        <img
          className="object-cover transition-all md:max-w-lg xl:max-w-2xl"
          src={question}
        />
      </div>

      {/* question and reasons */}
      <div className="flex md:text-lg xl:text-xl flex-col justify-center gap-5">
        {/* why taku */}
        <div className="flex flex-col w-52 lg:w-96">
          <div className="font-bold text-3xl lg:text-5xl">چرا تاکو آکادمی؟</div>
          <div className="bg-under w-44 lg:w-72 h-2 lg:h-3" />
        </div>

        {/* reasons */}
        <div className="flex justify-start items-center gap-4">
          <div className="bg-all bg-dart p-6 border rounded-full" />
          <div>چون نمیزاره شما گیج بشید و یا راهی که دارید رو گم کنید.</div>
        </div>

        <div className="flex justify-start items-center gap-4">
          <div className="bg-all bg-check  p-6 border rounded-full" />
          <div>۰ تا ۱۰۰ هر حوزه‌ای رو بدون پیش نیاز بهتون یاد میده.</div>
        </div>

        <div className="flex justify-start items-center gap-4">
          <div className="bg-all bg-up  p-6 border rounded-full" />
          <div>با توجه به عملکرد شما رایگان بهتون فضای پیشرفت داده میشه.</div>
        </div>

        <div className="flex justify-start items-center gap-4">
          <div className="bg-all bg-per  p-6 border rounded-full" />
          <div>چون یا رایگانه یا خیلی ارزون :))</div>
        </div>

        <div className="flex justify-start items-center gap-4">
          <div className="bg-all bg-person  p-6 border rounded-full" />
          <div>چون بهترین اساتید رو برای تدریس در اختیارتون قرار میده.</div>
        </div>

        <div className="flex justify-around items-center gap-4">
          <div className="bg-all bg-chat  p-6 border rounded-full" />
          <div>
            چون پشتیبان‌های ما همیشه پیگیر روند شما و راهنمایی شما هستن.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
