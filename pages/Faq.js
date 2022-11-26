import FaqBanner from "../components/faq/FaqBanner";
import FaqDetails from "../components/faq/FaqDetails";
import BasicLayout from "../layouts/BasicLayout";
const Faq = () => {
  return (
    <BasicLayout>
       <FaqBanner />
      <FaqDetails />
    </BasicLayout>
  );
};

export default Faq;
