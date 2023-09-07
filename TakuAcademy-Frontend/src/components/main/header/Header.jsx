import React, { useState, useEffect } from "react";
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
    <div className="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center md:ms-11 lg:mx-5">
      {/* first part:bitch */}
      <div className="mx-auto">
        <img
          className="object-cover transition-all floating-image"
          src={lady}
        />
      </div>

      {/* second part:texts */}
      <div className="flex flex-col mx-7  xl:ms-40 max-w-screen-sm">
        {/* first part of texts */}
        <div className="flex gap-2 items-center text-start">
          <div className="background-props bg-flash bg-slate-500"></div>
          <p>آکادمی تاکو</p>
        </div>
        {/* intro */}
        <div className="text-4xl font-bold leading-normal xl:text-6xl">
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

        {/* React Number Format */}
        <div className="flex justify-center gap-4 md:gap-16 lg:gap-7 my-6 items-center">
          {numbersData.map((data, index) => (
            <div className="flex flex-col items-center" key={index}>
              <span className="font-semibold">
                <CustomNumeralNumericFormat value={counts[index]} />+
              </span>
              <div className="background-props bg-underLine"></div>
              <div className="text-sm md:text-lg whitespace-nowrap my-2">
                {data.subject}
              </div>
            </div>
          ))}
        </div>
        {/* Numbers group ends here */}
      </div>
    </div>
  );
};

export default Header;
