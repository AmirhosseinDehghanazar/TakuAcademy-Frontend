import {
  BubleColor,
  Comment,
  Courses,
  Footer,
  Header,
  Navbar,
  Question,
  Segment,
} from "../components";

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
      <div className="overflow-hidden relative ">
        <div>
          {buble.map((b, i) =>
            i % 2 !== 0 ? (
              <BubleColor
                key={i}
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
                key={i}
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
          <div className="bg-asatid">
            <Navbar />
            <Header />
          </div>

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
