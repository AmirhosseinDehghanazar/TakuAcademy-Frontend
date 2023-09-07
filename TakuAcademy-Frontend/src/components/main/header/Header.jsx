import React from "react";
import lady from "../../../assets/header/lady-on-pc.png";
import "./header.css";
import { CustomNumeralNumericFormat } from "../../numeric";

const Header = () => {
  // fake data to test
  const numbersData = [
    {
      amount: 2400,
      subject: "دانشجوی موفق",
    },
    {
      amount: 22,
      subject: " دوره آموزشی",
    },
    {
      amount: 3000,
      subject: " نظر مثبت",
    },
    {
      amount: 59,
      subject: "استاد برجسته",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center md:ms-11">
      {/* first part:bitch */}
      <div className="mx-auto">
        <img className="ladyPic" src={lady} />
      </div>

      {/* second part:texts */}
      <div className="flex flex-col mx-7 lg:max-w-md lg:ms-20">
        {/* first part of texts */}
        <div className="flex gap-2 items-center text-start">
          <div className="background-props bg-flash bg-slate-500"></div>
          <p>آکادمی تاکو</p>
        </div>
        {/* intro */}
        <div className="text-4xl font-bold leading-normal">
          آموزشی با کیفیت با اساتید برجسته در تمام حوزه‌های علوم کامپیوتر
        </div>
        {/* lorem */}
        <div className="my-3 leading-loose">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </div>

        {/*two buttons parent */}
        <div className="flex flex-col gap-3 md:flex-row text-center my-4 w-full">
          <a href="#">
            <button className="w-full bg-gradient rounded-lg py-2.5 button-element md:px-5">
              مشاهده دوره‌ها
              <span className="background-props bg-arrow-w"></span>
            </button>
          </a>

          <a href="#">
            <button className="w-full bg-cusWhite text-cusBlack rounded-lg py-2.5 button-element md:px-5">
              مشاهده دوره‌ها
              <span className="background-props bg-arrow-b"></span>
            </button>
          </a>
        </div>

        {/* react-number-format ?? */}
        {/* mapping through data to show the data */}
        <div className="flex justify-center gap-4 md:gap-16 lg:gap-7 my-6 items-center">
          {numbersData.map((data) => (
            <div className="flex flex-col items-center">
              <span className="font-semibold">
                <CustomNumeralNumericFormat value={data.amount} />+
              </span>
              <div className="background-props bg-underLine"></div>
              <div className="text-sm md:text-lg whitespace-nowrap my-2">
                {data.subject}
              </div>
            </div>
          ))}
        </div>
        {/* numbers group end here */}
      </div>
    </div>
  );
};

export default Header;
