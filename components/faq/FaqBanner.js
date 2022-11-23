import React from "react";

const FaqBanner = () => {
  return (
    <div className="container">
      <div className="h-[330px] rounded-[20px] bg-success mt-6 pl-5 xl:pl-20 pt-9 xl:pt-7 pb-16 flex xl:items-center">
        <div className="relative h-full w-full">
          <p className="font-mulish text-[90px] md:text-[120px] lg:text-[160px] xl:text-[190px] font-[1000] leading-[112px] md:leading-[140px] lg:leading-[240px] bg-clip-text text-transparent bg-gradient-to-r from-white/40 to-white/10 opacity-40">
            FAQ ?
          </p>
          <div className="absolute bottom-0 lg:ml-2 w-full">
            <h4 className="font-mulish text-[40px] font-semibold text-white leading-[56px] text-center lg:text-start mb-2 xl:mb-3">
              FAQ
            </h4>
            <p className="font-mulish text-white text-center lg:text-start opacity-80 max-w-[535px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
              viverra viverra morbi facilisis lacus, sed orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBanner;
