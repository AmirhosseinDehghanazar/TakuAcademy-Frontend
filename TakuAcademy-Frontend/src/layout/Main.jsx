import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/main/header/header";
import Segment from "../components/main/segment/Segment";
import Courses from "../components/main/courses/Courses";
import Question from "../components/main/question/Question";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Segment />
      <Courses />
      <Question />
    </div>
  );
};

export default Main;
