import React from "react";
import "./question.css";
import icon1 from "../../../assets/question/icon1.png";
import icon2 from "../../../assets/question/icon2.png";
import icon3 from "../../../assets/question/icon3.png";
import icon4 from "../../../assets/question/icon4.png";
import icon5 from "../../../assets/question/icon5.png";
import icon6 from "../../../assets/question/icon6.png";
import underline from "../../../assets/question/qVector.png";
import question from "../../../assets/question/question.png";

const Question = () => {
  return (
    <div className="flex mar-x flex-col-reverse question-parent justify-center items-center lg:flex-row my-24">
      {/* image element */}
      <div className="mx-auto">
        <img
          className="object-cover transition-all md:max-w-lg xl:max-w-2xl"
          src={question}
        />
      </div>

      {/* question and reasons */}
      <div className="flex flex-col justify-center gap-5">
        {/* why taku */}
        <div>
          <div className="font-bold text-4xl">چرا تاکو آکادمی؟</div>
          <div className="underLine" />
        </div>

        {/* reasons */}
        <div>
          <div className="bg-img bg-dart" />
          <div>چون نمیزاره شما گیج بشید و یا راهی که دارید رو گم کنید.</div>
        </div>
        <div>
          <div className="bg-img bg-check" />
          <div>۰ تا ۱۰۰ هر حوزه‌ای رو بدون پیش نیاز بهتون یاد میده.</div>
        </div>
        <div>
          <div className="bg-img bg-up" />
          <div>با توجه به عملکرد شما رایگان بهتون فضای پیشرفت داده میشه.</div>
        </div>
        <div>
          <div className="bg-img bg-per" />
          <div>چون یا رایگانه یا خیلی ارزون :))</div>
        </div>
        <div>
          <div className="bg-img bg-person" />
          <div>چون بهترین اساتید رو برای تدریس در اختیارتون قرار میده.</div>
        </div>
        <div>
          <div className="bg-img bg-chat" />
          <div>
            چون پشتیبان‌های ما همیشه پیگیر روند شما و راهنمایی شما هستن.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
