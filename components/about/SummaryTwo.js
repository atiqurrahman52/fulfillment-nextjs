import CountUp from "react-countup";

// import { countData } from "../../data/summaryData";
import { countData } from "../../data/summaryData";

const SummaryTwo = () => {
  return (
    <div className="count-bg bg-cover bg-center  object-cover bg-no-repeat py-10 xl:h-[390px]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center xl:p-20 gap-5">
          {countData.map(({ id, label, number }) => {
            return (
              <div key={id} className="text-center ">
                <CountUp
                  className="font-poppins font-semibold text-base md:text-4xl leading-9 md:leading-[54px] text-[#293E5A]"
                  end={number}
                />
                <span className="count font-poppins font-semibold text-base md:text-4xl text-[#293E5A]">
                  {id === 3 ? "%" : "+"}
                </span>

                <p className="font-semibold font-poppins text-sm  leading-[18px] md:leading-[21px] text-success">
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

export default SummaryTwo;
