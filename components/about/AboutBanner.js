const AboutBanner = () => {
  return (
    <div className="about-bg bg-center bg-no-repeat bg-cover w-full h-[220px] md:h-[350px] xl:h-screen">
      <div className="bg-gradient-to-r from-[#182A4499]/60 to-[#152740] opacity-90 h-full w-full flex justify-center items-center">
        <h3 className="font-poppins font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[64px] xl:leading-[96px] text-white text-center">
          Our business is to help <br />
          you succeed in your <br />
          business!
        </h3>
      </div>
    </div>
  );
};

export default AboutBanner;
