import { ArrowDown, CaretDown } from "phosphor-react";
import { useState } from "react";
import { applicationFaqData } from "../../data/applicationFaqData";
// import { tourItineraryData } from "../../data/tourItinerary/tourItineraryData";

const ProcessFaq = () => {
  const [accordionActive, setAccordionActive] = useState(0);

  return (
    <div className="container">
      <div className="py-9 md:py-10">
        <div className="flex flex-col justify-center items-center mb-10">
          <h3 className="text-primary font-poppins font-bold text-2xl md:text-[40px] text-center md:leading-[60px] mb-[15px] md:mb-2.5">
            Application Process FAQ
          </h3>
          <p className="text-[#7E8A9B] font-poppins text-sm max-w-[713px] text-center md:text-base">
            Anything else you want to know about our application process? This
            list of frequently asked questions is a good place to start.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8 w-full h-full">
            {applicationFaqData.map(({ id, title, description }) => (
              <div
                key={id}
                onClick={() =>
                  setAccordionActive(id === accordionActive ? "" : id)
                }
                className="rounded-xl border-2 border-[#EBECED] pt-2.5 ms:pt-[26px] pb-2.5 md:pb-5 px-2.5 md:px-4 mb-2.5 md:mb-4"
              >
                <div className="flex items-center justify-between lg:text-xl py-2.5 px-5 cursor-pointer">
                  <p className="text-[#304562] font-poppins font-medium text-base md:text-[18px] leading-7">
                    {title}
                  </p>
                  <ArrowDown
                    size={28}
                    className={`${
                      id === accordionActive
                        ? "rotate-180 transition-all  text-xl md:text-2xl duration-500 text-success"
                        : "text-success"
                    }`}
                  />
                </div>
                {id === accordionActive && (
                  <p
                    key={id}
                    className="bg-white accor-content scale-y- text-[#8895A7] text-sm lg:text-base p-2"
                  >
                    {description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="col-span-12 xl:col-span-4 bg-[#D8D5DF] p-5 md:p-10 rounded-[16px] w-full h-full">
            <form action="">
              <div className="text-center md:text-left">
                <h3 className="text-[#828B9F] font-poppins font-bold text-base tracking-[0.04em] uppercase mb-2.5">
                  contact us
                </h3>
                <h1 className="text-primary font-poppins font-bold text-[32px] md:text-[40px] tracking-[-0.02em] mb-10">
                  Send Message
                </h1>
              </div>

              <div className="space-y-5">
                <div className="bg-white rounded-[5px] flex flex-row justify-between items-center py-[15px] px-5">
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="font-medium outline-none w-full"
                  />
                  <div className="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
                          stroke="url(#paint0_linear_1000_404)"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                          stroke="url(#paint1_linear_1000_404)"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1000_404"
                          x1="5"
                          y1="16"
                          x2="19"
                          y2="16"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#182A44" />
                          <stop offset="1" stop-color="#3C5271" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1000_404"
                          x1="8"
                          y1="8"
                          x2="16"
                          y2="8"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#182A44" />
                          <stop offset="1" stop-color="#3C5271" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="bg-white rounded-[5px] flex flex-row justify-between items-center py-[15px] px-5">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="font-medium outline-none w-full"
                  />
                  <div className="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 9L12 12.5L17 9"
                        stroke="url(#paint0_linear_1000_412)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                        stroke="url(#paint1_linear_1000_412)"
                        stroke-width="1.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1000_412"
                          x1="12"
                          y1="12.5"
                          x2="12"
                          y2="9"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#182A44" />
                          <stop offset="1" stop-color="#3C5271" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1000_412"
                          x1="2"
                          y1="12"
                          x2="22"
                          y2="12"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#182A44" />
                          <stop offset="1" stop-color="#3C5271" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="bg-white rounded-[5px] flex flex-row justify-between items-start py-[15px] px-5">
                  <textarea
                    rows="5"
                    placeholder="Enter massage"
                    className="font-medium outline-none w-full"
                  />
                  {/* <textarea rows="5" cols=""
                   placeholder="Enter massage"
                   className="font-medium outline-none"
                  >

                  </textarea> */}
                  {/* <img src="../../assets/images/svgimg/user.svg" alt=""  /> */}

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1000_420)">
                      <path
                        d="M9.16675 3.33331H3.33341C2.89139 3.33331 2.46746 3.50891 2.1549 3.82147C1.84234 4.13403 1.66675 4.55795 1.66675 4.99998V16.6666C1.66675 17.1087 1.84234 17.5326 2.1549 17.8452C2.46746 18.1577 2.89139 18.3333 3.33341 18.3333H15.0001C15.4421 18.3333 15.866 18.1577 16.1786 17.8452C16.4912 17.5326 16.6667 17.1087 16.6667 16.6666V10.8333"
                        stroke="url(#paint0_linear_1000_420)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.4167 2.08332C15.7483 1.7518 16.1979 1.56555 16.6667 1.56555C17.1356 1.56555 17.5852 1.7518 17.9167 2.08332C18.2483 2.41484 18.4345 2.86448 18.4345 3.33332C18.4345 3.80216 18.2483 4.2518 17.9167 4.58332L10.0001 12.5L6.66675 13.3333L7.50008 9.99998L15.4167 2.08332Z"
                        stroke="url(#paint1_linear_1000_420)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1000_420"
                        x1="1.66675"
                        y1="10.8333"
                        x2="16.6667"
                        y2="10.8333"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#182A44" />
                        <stop offset="1" stop-color="#3C5271" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1000_420"
                        x1="6.66675"
                        y1="7.44944"
                        x2="18.4345"
                        y2="7.44944"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#182A44" />
                        <stop offset="1" stop-color="#3C5271" />
                      </linearGradient>
                      <clipPath id="clip0_1000_420">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="flex items-center mt-10">
                <button className="text-white font-poppins font-semibold text-base leading-6 tracking-[0.04em] bg-[#3B2D60] px-[30px] py-2.5 rounded w-full h-full">
                  Get A Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFaq;
