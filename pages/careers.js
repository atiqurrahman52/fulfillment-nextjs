import React from "react";
import CareerHeader from "../components/career/CareerHeader";
import Culture from "../components/career/Culture";
import Job from "../components/career/Job";
import ProcessFaq from "../components/career/ProcessFaq";

const careers = () => {
  return (
    <div>
      <CareerHeader />
      <Culture />
      <Job />
      <ProcessFaq />
    </div>
  );
};

export default careers;
