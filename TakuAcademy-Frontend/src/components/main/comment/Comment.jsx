import React, { useRef } from "react";
import "./comment.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-rating";
import taha from "../../../assets/card/taha-khoshgele.png";
import yellowStar from "../../../assets/comment/star-yellow.png";
import star from "../../../assets/comment/star-empty.png";

const Comment = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const comments = [
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      name: "احمد ذوقی",
      role: "از خوبا",
      rate: "3",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      name: "آقا رضا",
      role: "دیزاینر",
      rate: "4",
    },
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      name: "طاها جوووون",
      role: "فرانت اند",
      rate: "5",
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
        <div className="light">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.
        </div>
        <button className="arrow-btn bg-gradient flex justify-center items-center gap-2 py-3 px-5 rounded-lg max-w-xs">
          <p> همین حالا شروع کنید</p>
          <div className="bg-arrow bg-arrow-w"></div>
        </button>
      </div>

      <div className="relative box">
        {/* blueCube */}
        <div className="h-80 thin-border  p-5 rounded-lg bg-cusDarkBlue rounded-20">
          {/* place for comment */}
          <div className="h-80  overflow-auto rounded-md relative ">
            <Slider className="slider" rtl {...settings} ref={sliderRef}>
              {comments.map((comment, i) => (
                <div key={i} className="comment-container h-56 overflow-auto">
                  <div className="flex justify-between items-center mb-3">
                    {/* commenter detail + rating */}
                    <div className="flex gap-2 justify-start items-center">
                      <img
                        className="w-10 md:w-12 lg:w-14 xl:w-16"
                        src={taha}
                      />
                      <div className="flex flex-col gap-1">
                        <p>{comment.name}</p>
                        <p className="text-sm text-gray-300/90">
                          {comment.role}{" "}
                        </p>
                      </div>
                    </div>
                    {/* rating */}
                    <div>
                      <Rating
                        emptySymbol={<img src={star} />}
                        fullSymbol={<img src={yellowStar} />}
                        initialRating={comment.rate}
                        readonly
                      />
                    </div>
                  </div>
                  {/* line */}
                  <div className="line-comment" />
                  {/* text */}
                  <div className="leading-loose mx-auto mt-5 overflow-auto">
                    {comment.text}
                  </div>
                </div>
              ))}
            </Slider>

            {/* buttons */}
            <div className="absolute rounded-lg px-2 bottom-14 left-0">
              <div>
                <button
                  className=""
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <div className="arrow-right flash" />
                </button>
                <button
                  className=""
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <div className="arrow-left flash" />
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
