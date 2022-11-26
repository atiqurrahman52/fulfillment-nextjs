import Image from "next/image";
import Link from "next/link";
import { jobs } from "../../data/jobData";

const Job = () => {
  const options = [
    {
      label: "Dhaka",
      value: "dhaka",
    },
    {
      label: "New York",
      value: "newyork",
    },
    {
      label: "Sydney",
      value: "sydney",
    },
    {
      label: "Berlin",
      value: "berlin ",
    },
    {
      label: "Dublin",
      value: "dublin",
    },
  ];
  return (
    <div className="container">
      {/* job position started  */}
      <div>
        <h1 class="text-primary font-poppins font-bold text-2xl md:text-[40px] text-center md:mb-[60px] mb-10">
          Open Positions
        </h1>
        <div class="grid md:grid-cols-10 md:gap-4 max-w-5xl mx-auto">
          <div className="md:col-span-5 lg:col-span-6">
            <div className="grid md:grid-cols-6 gap-4">
              <select
                value="dhaka"
                class="md:col-span-2 text-[#A5ADB9] bg-[#F7F7F7] rounded-[10px] px-4 py-3"
              >
                {options.map((option, i) => (
                  <option
                    key={i}
                    value={option.value}
                    class="text-[#A5ADB9] font-poppins font-medium text-sm md:text-base"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                class="md:col-span-4 bg-[#F7F7F7] font-medium rounded-[10px] px-4 py-3"
                type="text"
                placeholder="Work type"
              />
            </div>
          </div>

          <div class="md:col-span-5 lg:col-span-4 mt-10 md:mt-0">
            <div className="md:flex items-center gap-4 space-y-1">
              <p class="text-sm xl:text-base w-full bg-success py-3 rounded-[10px] max-w-[200px] mx-auto font-poppins font-medium uppercase text-white text-center">
                Search
              </p>
              <p class="text-sm xl:text-base text-[#BEBEBE] font-poppins font-medium uppercase text-center">
                OR
              </p>
              <p class="text-sm xl:text-base w-full bg-[#3B2D60] py-3 rounded-[10px] max-w-[200px] mx-auto font-poppins font-medium uppercase text-white text-center ">
                View all jobs
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* First job started  */}
      <div className="p-10">
        <h2 className="font-poppins font-semibold text-lg md:text-2xl text-primary mb-6">
              Head of Marketing
            </h2>
        <div className="grid xl:grid-cols-12 gap-5">
          
          <div className="col-span-10 md:col-span-7 xl:col-span-7  max-w-[665px]">
            <p className="text-[#7E8A9B] font-poppins text-base text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              enim eu, eget vitae lacus. Lacinia eros rutrum ut nam integer
              interdum. Volutpat sit cursus sit ultricies ornare adipiscing ut
              rhoncus. Sodales amet morbi lectus massa non est. Id mauris morbi
              nisi, nunc lectus quam euismod viverra egestas. Duis gravida a eu
              aliquam rhoncus diam. At arcu nisl eget turpis nisl egestas enim.
              Ac tellus mauris, fermentum elit pellentesque. Facilisi enim quam
              rhoncus dolor ac mauris ultricies sit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aliquet enim eu, eget vitae lacus.
              Lacinia eros rutrum ut nam integer interdum. Volutpat sit cursus
              sit ultricies ornare adipiscing ut rhoncus. Sodales amet morbi
              lectus massa non est. Id mauris morbi nisi, nunc lectus quam
              euismod viverra egestas. Duis gravida a eu aliquam rhoncus diam.
              At arcu nisl eget turpis nisl egestas enim. Ac tellus mauris,
              fermentum elit pellentesque. Facilisi enim quam rhoncus dolor ac
              mauris ultricies sit.
            </p>
           
            <div className="lg:mx-0 flex justify-center items-center">
              <button class="bg-success text-sm xl:text-base text-white py-1.5 xl:py-2.5 w-[110px] xl:w-[168px] rounded  mt-12">
                Apply Now
              </button>
            </div>
          </div>
          <div className="col-span-10 md:col-span-6 xl:col-span-5">
            <div class="flex items-center gap-2 mb-6">
              <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
              <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="flex items-center gap-2 mb-6">
              <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
              <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="flex items-center gap-2 mb-6">
              <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
              <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="flex items-center gap-2 mb-6">
              <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
              <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="flex items-center gap-2 mb-6">
              <p class="h-1 w-1 bg-[#758090] rounded-full"></p>
              <p class="text-[#7E8A9B] font-poppins text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* jobs started  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-6 py-10 xl:py-8">
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
                  <Image
                    class="w-5 xl:w-8 h-5 xl:h-8"
                    src={image}
                    width={30}
                    height={30}
                    alt=""
                  />
                  <p class="text-[#8490A2] font-medium text-sm xl:text-lg">
                    {address}
                  </p>
                </div>
              </div>
              <h3 class="text-[#314663] font-poppins font-bold text-sm xl:text-xl">
                {title}
              </h3>
              <div className="flex justify-between items-center">
                <Link
                  class="text-success font-medium text-xs xl:text-sm underline"
                  href="#"
                >
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
      <div className="text-center">
        <button
          type=""
          className="bg-color py-3 mx-auto px-11  rounded-lg text-white font-poppins font-semibold  uppercase leading-7"
        >
          View all jobs
        </button>
      </div>
    </div>
  );
};

export default Job;
