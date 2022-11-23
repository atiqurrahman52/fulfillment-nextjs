const Position = () => {
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

      {/* <div class="py-10 md:py-20">
        <div class="grid grid-cols-12 bg-white shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] rounded-[20px] py-5 md:py-[41px] px-2 md:px-[62px]">
          <div class="col-span-12 md:col-span-7 md:pr-[144px]">
            <h1 class="font-poppins font-semibold text-2xl text-primary mb-6 md:mb-[27px] text-center md:text-left">
              Head of Marketing
            </h1>
            <p class="font-poppins text-sm md:text-base text-[#828EA0] mb-6 md:mb-[51px]">
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
            <p class="bg-success hidden md:block py-2.5 px-[41px] rounded-[5px] w-[168px] h-[42px] text-white flex justify-center items-center md:mx-0 mx-auto">
              Apply Now
            </p>
          </div>
          <div class="col-span-12 xl:col-span-5">
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
            <p class="bg-success md:hidden block  py-2.5 px-10 rounded-[5px] w-[168px]  text-white text-center md:mx-0 mx-auto">
              Apply Now 
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Position;
