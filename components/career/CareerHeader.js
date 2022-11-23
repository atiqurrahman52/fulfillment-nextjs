import React from "react";
import family from "../../assets/images/career/family.png";
const CareerHeader = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-12 md:gap-6 items-center">
        <div className="order-last md:order-first">
          <h1 className="text-[#2D425F] font-poppins font-semibold text-2xl md:text-[40px] leading-[34px] md:leading-[56px] text-center md:text-left mb-6">
            Become a Part of <br />
            Packme Family
          </h1>
          <p className="text-[#B0B2B9] font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-[24px] text-center md:text-left tracking-[0.04em] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
            viverra viverra morbi facilisis lacus, sed orci. Aliquet varius enim
            orci, turpis sed. Turpis eget habitasse quisque mauris diam felis
            rhoncus.
          </p>
          <p className="text-white font-poppins font-semibold text-base leading-6 tracking-[0.04em] bg-[#3B2D60] px-[30px] py-2.5 rounded mx-auto md:mx-0 w-max">
            See open positions
          </p>
        </div>
        <div>
          <img
            className="w-[288px] md:w-[757px] h-[203px] md:h-[534px] mx-auto md:mx-0"
            src={family}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CareerHeader;
