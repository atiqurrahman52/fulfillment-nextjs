import { useEffect, useState } from "react";

// data
import { legalData } from "../../data/legalData";

const Legal = () => {
  const [tabActive, setTabActive] = useState(0);
  const [data, setData] = useState(legalData[tabActive]);

  useEffect(() => {
    setData(legalData[tabActive]);
  }, [tabActive, data]);

  const { header, version, date, items } = data;

  return (
    <div className="container">
      <div className="py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 space-y-6 md:block sm:block hidden overflow-x-auto">
            {legalData.map(({ id, header }) => (
              <p
                key={id}
                onClick={() => setTabActive(id)}
                className={`cursor-pointer font-poppins text-primary ${
                  id === tabActive &&
                  "font-bold font-poppins text-lg text-primary"
                }`}
              >
                {header}
              </p>
            ))}
          </div>

          <div className="col-span-9">
            <h1 className="font-poppins font-bold text-xl md:text-[64px] leading-7 md:leading-[90px] text-primary mb-6 md:mb-2">
              {header}
            </h1>
            <p className="flex items-center gap-3">
              <span className="font-poppins font-semibold text-base md:text-lg text-primary">
                {version}
              </span>
              <span className="h-[1px] w-6 bg-primary"></span>
              <span className="font-poppins text-base md:text-lg text-primary ">
                {date}
              </span>
            </p>

            <div className="mt-16 space-y-6">
              {items.map(({ id, title, summary, description }) => {
                return (
                  <div key={id}>
                    <h5 className="font-poppins font-semibold text-sm md:text-2xl text-primary mb-2 md:mb-6">
                      {title}
                    </h5>
                    <p className="text-primary mb-6 font-poppins text-sm md:text-base">
                      {summary}
                    </p>

                    <div className="space-y-6">
                      {description.map(({ id, title, info }) => (
                        <p
                          key={id}
                          className="text-primary whitespace-pre-line mb-6 font-poppins text-sm md:text-base "
                        >
                          <span className="font-semibold mr-2">
                            {title}
                          </span>
                          {info}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 xl:mx-20 col-span-1 md:col-span-9 px-4 py-5 lg:py-12  shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] flex items-center justify-between max-w-[804px]  rounded-[15px] flex-col lg:flex-row gap-5">
              
              <p class="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#182A44] to-[#3C5271]">
                Was this article helpful?
              </p>
              <div class="flex items-center justify-center gap-5">
                <p class="hover:cursor-pointer hover:text-green-700 hover:shadow-[0px_0px_5px_0px_#D0E2F4] transition-all duration-300 py-2.5 px-[15px] bg-[#F9FAFD] rounded-[10px] text-[#808D9E] md:text-primary">
                  Yes
                </p>
                <p class="hover:cursor-pointer hover:text-red-700 hover:shadow-[0px_0px_5px_0px_#D0E2F4] transition-all duration-300 py-2.5 px-[15px] bg-[#F9FAFD] rounded-[10px] text-[#808D9E] md:text-primary">
                  No
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
