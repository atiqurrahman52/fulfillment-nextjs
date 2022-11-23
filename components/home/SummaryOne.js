import CountUp from "react-countup";

import { countData } from "../../data/summaryData";

const SummaryOne = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 py-0 md:py-10 gap-[26px] md:gap-[120px]">
          {countData.map(({ id, label, number }) => {
            return (
              <div key={id} className="text-center ">
                <CountUp
                  className="font-poppins font-semibold text-2xl md:text-4xl leading-9 md:leading-[54px] text-success"
                  end={number}
                />
                <span className="count font-poppins font-semibold text-2xl md:text-4xl text-success">
                  {id === 3 ? "%" : "+"}
                </span>

                <p className="font-semibold font-poppins text-sm  leading-[18px] md:leading-[21px] text-[#D5D9DF]">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SummaryOne;
