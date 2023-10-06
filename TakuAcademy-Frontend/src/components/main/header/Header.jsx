import React, { useState, useEffect } from "react";
import lady from "../../../assets/header/lady-on-pc.svg";
import "./header.css";
import { CustomNumeralNumericFormat } from "../../numeric";
import headerBigLine from "../../../assets/header/headerBigLine.svg";

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

  // State to hold the current count for each item
  const [counts, setCounts] = useState(numbersData.map(() => 0));

  // Function to simulate counting for each item
  const simulateCounting = () => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < numbersData[index].amount ? count + 1 : count
        )
      );
    }, 10); // Update every 1 second (1000 milliseconds)

    // Clear the interval when all counts reach their respective amounts
    if (counts.every((count, index) => count >= numbersData[index].amount)) {
      clearInterval(interval);
    }
  };

  // Effect to start the counting simulation
  useEffect(() => {
    simulateCounting();
  }, []);

  return (
    <div className="relative z-[1] flex flex-col lg:mb-16 mar-x items-center pt-[7vw] lg:justify-center  animate-slideInFromBottom">
      {/* first part: image
      <div className="mx-auto">
        <img
          className="object-cover transition-all floating-image md:max-w-lg xl:max-w-2xl"
          src={lady}
        />
      </div> */}

      {/* second part:texts */}
      <div className="flex flex-col max-w-screen-sm xl:max-w-[1130px]">
        {/* first part of texts */}
        {/* <div className="flex gap-2 items-center text-start lg:mb-7 mb:5">
          <div className="background-props bg-flash bg-slate-500"></div>
          <p className="lg:text-25 text-lg">آکادمی تاکو</p>
        </div> */}
        {/* intro */}
        <div>
          <div className="text-4xl md:text-6xl 2xl:text-[74px] md:leading-[80px] font-bold text-center">
            آموزشی با کیفیت همراه با اساتید برجسته و اخذ معتبرترن مدارک بین
            المللی
          </div>
          {/* <div className="text-4xl font-bold text-center leading-normal xl:text-6xl">
            آموزشی با کیفیت با اساتید برجسته
            <span className="hidden md:inline-block relative right-96 bottom-3">
              <img src={headerBigLine} alt="" />
            </span>
          </div>
          <div className="text-4xl font-bold leading-normal xl:text-6xl">
            در تمام حوزه‌های علوم کامپیوتر
          </div> */}
        </div>

        {/* lorem */}
        <div className="my-5 leading-loose light text-center max-w-3xl mx-auto">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </div>

        {/*two buttons parent */}
        <div className="flex flex-col gap-3 md:gap-5 md:flex-row md:justify-center text-center my-4 w-full">
          <a href="#">
            <button className="w-full bg-gradient  rounded-[18px] py-2.5 arrow-btn md:px-5">
              مشاهده دوره‌ها
              <span className="background-props bg-arrow bg-arrow-w"></span>
            </button>
          </a>

          <a href="#">
            <button className="w-full bg-transparent border border-cusWhite/60 text-cusWhite rounded-[18px] py-2.5 arrow-btn md:px-5">
              مشاهده دوره‌ها
              <span className="background-props bg-arrow bg-arrow-w"></span>
            </button>
          </a>
        </div>

        {/* React Number Format
        <div className="flex justify-center lg:justify-start gap-4 md:gap-16 lg:gap-7 my-6 items-center">
          {numbersData.map((data, index) => (
            <div className="flex flex-col items-center " key={index}>
              <span className="font-extrabold lg:text-xl">
                <CustomNumeralNumericFormat value={counts[index]} />+
              </span>
              <div className="background-props bg-underLine"></div>
              <div className="text-sm md:text-lg xl:text-xl whitespace-nowrap my-2">
                {data.subject}
              </div>
            </div>
          ))}
        </div> */}
        {/* Numbers group ends here */}
      </div>
    </div>
  );
};

export default Header;
