import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/main/header/Header";
import Segment from "../components/main/segment/Segment";
import Courses from "../components/main/courses/Courses";
import Question from "../components/main/question/Question";
import Comment from "../components/main/comment/Comment";
import Footer from "../components/footer/Footer";
import BubleColor from "../components/BubleColor/BubleColor";

const Main = () => {
  const buble = [
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
    { num: -120 },
  ];

  return (
    <>
      <div className="overflow-hidden relative">
        <div>
          {buble.map((b, i) =>
            i % 2 !== 0 ? (
              <BubleColor
                position={{ top: i * 600, right: b.num }}
                blur={240} // Dynamic blur value
                borderRadius={0} // Dynamic border radius value
                color={"#009FFD"} // Dynamic colored buble
                zIndex={-10}
                width={300}
                height={300}
              />
            ) : (
              <BubleColor
                position={{ top: i * 600, left: b.num }}
                blur={240} // Dynamic blur value
                borderRadius={0} // Dynamic border radius value
                color={"#009FFD"} // Dynamic colored buble
                zIndex={-10}
                width={300}
                height={300}
              />
            )
          )}
        </div>

        <div>
          <Navbar />
          <Header />
          <Segment />
          <Courses />
          <Question />
          <Comment />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
