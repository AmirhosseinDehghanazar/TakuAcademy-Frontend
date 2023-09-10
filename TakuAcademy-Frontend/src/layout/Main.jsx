import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/main/header/header";
import Segment from "../components/main/segment/Segment";
import Courses from "../components/main/courses/Courses";
import Question from "../components/main/question/Question";
import Comment from "../components/main/comment/Comment";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div className="mt-5">
      <Navbar />
      <Header />
      <Segment />
      <Courses />
      <Question />
      <Comment />
      <Footer />
    </div>
  );
};

export default Main;
