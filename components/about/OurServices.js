import React from "react";
import { ourServices } from "../../data/ourServicesData";

const OurServices = () => {
  return (
    <div className="container">
      <div className="pt-10 md:pt-14 pb-10 md:pb-[71px]">
        <div className="space-y-4 md:space-y-2 mb-10 md:mb-[90px]">
          <h3 className="font-poppins font-semibold text-2xl md:text-[40px] leading-9 md:leading-[60px] text-center text-success">
            Why Packme?
          </h3>
          <p className="font-poppins font-normal text-sm leading-[21px] text-[#7F8C9D] text-center">
            Fulfillment by Pickme can help eliminate your fulfillment headaches
            and help you scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {ourServices.map((service) => {
            return (
             
                <div key={service.id} className="mb-[29px] md:mb-6">
                  <div className="flex gap-3 items-center lg:items-start">
                    <p className="h-2.5 md:h-5 w-2.5 md:w-5 bg-[#3B2D60] rounded-full"></p>
                    <h3 className="text-[#2C415D] font-poppins font-semibold text-base md:text-[18px]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[#7E8A9B] font-poppins text-sm mt-6 md:mt-[16px] ml-0 lg:ml-7">
                      {service.details}
                    </p>
                  </div>
                </div>
             
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
