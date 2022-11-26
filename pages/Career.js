import CareerHeader from "../components/career/CareerHeader";
import BasicLayout from "../layouts/BasicLayout";
import Culture from "../components/career/Culture";
import Job from "../components/career/Job";
// import Position from "../components/career/Position";
import ProcessFaq from "../components/career/ProcessFaq";

const Career = () => {
  return (
    
    <BasicLayout>
        <CareerHeader />
      <Culture />
      {/* <Position /> */}
      <Job />
      <ProcessFaq />
    </BasicLayout>
   
  );
};

export default Career;
