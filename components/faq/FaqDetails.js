import React, { useEffect, useState } from "react";

import { faqData } from "../../data/faqData";

const FaqDetails = () => {
  const [data, setData] = useState(faqData);

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4 md:gap-6 pt-10">
        {data.map((item) => (
          <div key={item.id} className="col-span-12">
            <div class="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-2">
                <p className="font-poppins font-semibold text-[20px] leading-[30px] mb-3 lg:mb-0 tracking-[.04em] text-success">
                  {item.header}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-10">
                {item.items.map((data) => (
                  <div key={data.id}>
                    <h3 className="text-[#3A506F] font-poppins font-medium text-base md:text-lg leading-6 md:leading-[27px] tracking-[.04em] mb-2.5 md:mb-[15px]">
                      {data.title}
                    </h3>
                    <p className="font-poppins font-normal text-sm md:text-base leading-[21px] md:leading-6 tracking-[.04em] text-[#828EA0] mb-4 md:mb-16">
                      {data.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqDetails;
