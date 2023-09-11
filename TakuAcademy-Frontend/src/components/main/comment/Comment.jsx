import React, { useRef } from "react";
import "./comment.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comment = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const comments = [
    {
      text: "With the help of this collection and professional leaders, I was able to reach the best possible level of preparation to participate in the TOEFL exam, and I am very grateful to them. - John Doe, Designer",
      name: "John Doe",
      role: "Designer",
    },
    {
      text: "This collection is a game-changer! It provided me with invaluable resources and support to excel in my TOEFL exam. - Jane Smith, Engineer",
      name: "Jane Smith",
      role: "Engineer",
    },
    {
      text: "I highly recommend this collection to anyone preparing for the TOEFL. The quality of materials and guidance is unmatched. - Michael Johnson, Student",
      name: "Michael Johnson",
      role: "Student",
    },
    {
      text: "The TOEFL exam was a breeze for me thanks to this amazing collection. I owe my success to the dedicated team behind it. - Sarah Williams, Teacher",
      name: "Sarah Williams",
      role: "Teacher",
    },
    {
      text: "I couldn't have asked for better TOEFL preparation. This collection is a treasure trove of knowledge. - David Lee, IT Professional",
      name: "David Lee",
      role: "IT Professional",
    },
    {
      text: "Kudos to the creators of this collection! It made a significant difference in my TOEFL scores. - Emily Davis, Writer",
      name: "Emily Davis",
      role: "Writer",
    },
    {
      text: "This collection is a must-have for TOEFL aspirants. It's like having a personal tutor guiding you to success. - Mark Johnson, Researcher",
      name: "Mark Johnson",
      role: "Researcher",
    },
    {
      text: "I'm amazed by how effective this collection is. It gave me the confidence to ace the TOEFL exam. - Jessica White, Nurse",
      name: "Jessica White",
      role: "Nurse",
    },
  ];

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
          <div className="text-center bg-transparent h-72 comment-sp-width rounded-md relative bg-white p-4 comment-rounder">
            <Slider {...settings} ref={sliderRef}>
              {comments.map((comment, index) => (
                <div key={index}>
                  <div>{comment.name}</div>
                </div>
              ))}
            </Slider>

            {/* buttons */}
            <div className="absolute rounded-lg px-2 bottom-10 right-5">
              <div>
                <button
                  className=""
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <div className="arrow-right arrow" />
                </button>
                <button
                  className=""
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <div className="arrow-left arrow" />
                </button>
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
