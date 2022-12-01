import CareerHeader from "../components/career/CareerHeader";

import Culture from "../components/career/Culture";
import Job from "../components/career/Job";
// import Position from "../components/career/Position";
import ProcessFaq from "../components/career/ProcessFaq";

const career = () => {
  return (
    <>
      <CareerHeader />
      <Culture />
      {/* <Position /> */}
      <Job />
      <ProcessFaq />
    </>
  );
};

export default career;
