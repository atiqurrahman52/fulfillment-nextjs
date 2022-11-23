import { useEffect, useState } from "react";
import checkbox from "../../assets/images/common/check-box.svg";
import { locationData } from "../../data/locationData";

const Location = () => {
  const [data, setData] = useState(locationData);
  const [tabActive, setTabActive] = useState(0);
  const [tabData, setTabData] = useState(data[tabActive]);

  useEffect(() => {
    setTabData(data[tabActive]);
  }, [data, tabActive, tabData]);

  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 md:py-16 gap-6">
        <div>
          <h3 className="font-mulish font-extrabold text-[26px] md:text-[40px] leading-[34px] md:leading-[48px] text-center md:text-left text-primary mb-6 md:mb-12">
            Warehouse Location Over the World
          </h3>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6 md:mb-12">
              {data.map(({ id, tab }) => (
                <p
                  key={id}
                  onClick={() => setTabActive(id)}
                  className={`border border-success px-9 py-2 tracking-[.64px] rounded-[5px] font-poppins font-bold ${
                    tabActive === id ? "bg-success text-white" : "text-success"
                  } flex justify-center items-center cursor-pointer`}
                >
                  {tab}
                </p>
              ))}
            </div>
            {data.map(({ id, location }) => {
              return (
                <div key={id}>
                  {tabActive === id && (
                    <div className="location-header font-poppins font-bold text-[32px] md:text-5xl 2xl:text-[64px] leading-[48px] 2xl:leading-[96px] text-center lg:text-left tracking-[.64px] uppercase mb-6 xl:mb-12 animate__animated animate__fadeIn">
                      {location}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden">
          {data.map(({ id, img, address }) => {
            return (
              <div key={id}>
                {tabActive === id && (
                  <div>
                    <div className="mb-5 md:mb-12">
                      <img
                        className="w-full h-[178px] md:h-[250px] xl:h-[402px] object-contain animate__animated animate__fadeInRightBig"
                        src={img}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-4">
                        {address.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 animate__animated animate__fadeIn"
                            >
                              <img
                                src={checkbox}
                                alt=""
                                className="h-4 xl:h-6 w-4 xl:w-6"
                              />
                              <h6 className="font-poppins font-semibold text-primary text-sm xl:text-base leading-6 text-center">
                                {item}
                              </h6>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Location;
