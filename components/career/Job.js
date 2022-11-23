import { Link } from "react-router-dom";

import { jobs } from "../../data/jobData";

const Job = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-6 py-10 xl:py-16">
        {jobs.map(({ id, date, image, address, title, viewJob, apply }) => {
          return (
            <div
              key={id}
              class="bg-white shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] p-5 xl:p-10 rounded-[10px] space-y-2.5 xl:space-y-4"
            >
              <div className="flex justify-between items-center">
                <p class="text-[#AAB3BE] font-poppins font-medium text-xs xl:text-sm">
                  {date}
                </p>
                <div class="flex items-center gap-2 xl:gap-3">
                  <img class="w-5 xl:w-8 h-5 xl:h-8" src={image} alt="" />
                  <p class="text-[#8490A2] font-medium text-sm xl:text-lg">
                    {address}
                  </p>
                </div>
              </div>
              <h3 class="text-[#314663] font-poppins font-bold text-sm xl:text-xl">
                {title}
              </h3>
              <div className="flex justify-between items-center">
                <Link class="text-success font-medium text-xs xl:text-sm underline" to="#">
                  {viewJob}
                </Link>

                <button class="bg-success text-sm xl:text-base text-white py-1.5 xl:py-2.5 w-[110px] xl:w-[168px] rounded text-center">
                  {apply}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
