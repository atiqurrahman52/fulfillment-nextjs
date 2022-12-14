import AboutBanner from "../components/about/AboutBanner";
import OurServices from "../components/about/OurServices";
import Reviews from "../components/about/Reviews";
import SummaryTwo from "../components/about/SummaryTwo";
import AboutUs from "../components/share/AboutUs";
import Brand from "../components/share/Brand";

const About = () => {
  return (
    <>
      <AboutBanner />
      <AboutUs />
      <SummaryTwo />
      <OurServices />
      <Reviews />
      <Brand />
    </>
  );
};

export default About;
