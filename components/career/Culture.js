import React from "react";
import { culturedata } from "../../data/cultureData";

const Culture = () => {
  return (
    <div class="container">
      <div class="py-10 md:py-16">
        <div class="flex flex-col justify-center items-center gap-y-2 md:gap-y-5 mb-10">
          <h3 class="font-poppins font-bold text-2xl md:text-[40px] text-[#304563]">
            Our Culture
          </h3>
          <p class="text-[#808C9D] font-poppins text-sm md:text-base tracking-[0.04em] max-w-[738px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
            viverra viverra morbi facilisis lacus, sqd orci. Aliquet varius enim
            orci, turpis sed.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          {culturedata.map((data) => {
            return (
              <div
                key={data.id}
                class="col-span-1 md:col-span-6 mb-6 md:mb-14 mr-0 md:mr-2"
              >
                <h3 class="font-poppins font-semibold text-base md:text-xl text-[#394F6D] mb-2 md:mb-5">
                  {data.title}
                </h3>
                <p class="text-[#808C9D] font-poppins text-sm md:text-base tracking-[0.04em] text-justify max-w-[636px]">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Culture;
