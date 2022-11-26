import BasicLayout from "../layouts/BasicLayout";

const Contact = () => {
  return (
   <BasicLayout>
     <div class="contact-bg bg-cover bg-no-repeat bg-center py-20 xl:py-24">
      <div class="container">
        <div class="flex justify-center">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div class="bg-[#3B2D6033]/20 w-[134px] md:w-[200px] h-[159px] md:h-[200px] rounded-[15px] gap-6 p-2.5 md:p-0">
              <div class="bg-white rounded-full p-5 w-max mx-auto mt-[10px] md:mt-[25px]">
                <svg
                  class="h-2.5 md:h-5 w-2.5 md:w-5"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1161 13.702L12.9979 14.5C10.2162 13.1038 8.4979 11.5 7.4979 9L8.26785 4.8699L6.81241 1L3.06149 1C1.93394 1 1.04603 1.93178 1.21443 3.04668C1.63484 5.83 2.87442 10.8765 6.49789 14.5C10.3031 18.3052 15.7836 19.9564 18.7999 20.6127C19.9647 20.8662 20.9979 19.9575 20.9979 18.7655L20.9979 15.1812L17.1161 13.702Z"
                    fill="#3B2D60"
                    stroke="#3B2D60"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="font-mulish font-bold text-base leading-[20px] tracking-[.64px] text-white uppercase w-max mx-auto mt-7 md:mt-6">
                Phone
              </p>
              <div class="w-max mx-auto mt-[8px] md:mt-[5px]">
                <a
                  class="font-poppins font-medium text-xs md:text-base leading-[17px] md:leading-[22px] text-white"
                  href="tel:+880 1245 586 544"
                >
                  +880 1245 586 544
                </a>
              </div>
            </div>

            <div class="bg-[#3B2D6033]/20 w-[134px] md:w-[200px] h-[159px] md:h-[200px] rounded-[15px] gap-6 p-2.5 md:p-0">
              <div class="bg-white rounded-full p-5 w-max mx-auto mt-[10px] md:mt-[25px]">
                <svg
                  class="h-2.5 md:h-5 w-2.5 md:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                    fill="#3B2D60"
                    stroke="#3B2D60"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7 9L12 12.5L17 9"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="font-mulish font-bold text-base leading-[20px] tracking-[.64px] text-white uppercase w-max mx-auto mt-7 md:mt-6">
                Email
              </p>
              <div class="w-max mx-auto mt-[8px] md:mt-[5px]">
                <a
                  class="font-poppins font-medium text-xs md:text-base leading-[17px] md:leading-[22px] text-white"
                  href="mailto:help@pickme.xyz"
                >
                  help@pickme.xyz
                </a>
              </div>
            </div>

            <div class="bg-[#3B2D6033]/20 w-[134px] md:w-[200px] h-[159px] md:h-[200px] rounded-[15px] gap-6 p-2.5 md:p-0">
              <div class="bg-white rounded-full p-5 w-max mx-auto mt-[10px] md:mt-[25px]">
                <svg
                  class="h-2.5 md:h-5 w-2.5 md:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                      fill="#3B2D60"
                    />
                    <path
                      d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <p class="font-mulish font-bold text-base leading-[20px] tracking-[.64px] text-white uppercase w-max mx-auto mt-7 md:mt-6">
                Address
              </p>
              <div class="w-max mx-auto mt-[8px] md:mt-[5px]">
                <p class="font-poppins font-medium text-xs md:text-base leading-[17px] md:leading-[22px] text-white">
                  Knoxville, TN
                </p>
              </div>
            </div>

            <div class="bg-[#3B2D6033]/20 w-[134px] md:w-[200px] h-[159px] md:h-[200px] rounded-[15px] gap-6 p-2.5 md:p-0">
              <div class="bg-white rounded-full p-5 w-max mx-auto mt-[10px] md:mt-[25px]">
                <svg
                  class="h-2.5 md:h-5 w-2.5 md:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M15.5 6.5L8.5 10.5"
                      stroke="#3B2D60"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8.5 13.5L15.5 17.5"
                      stroke="#3B2D60"
                      stroke-width="1.5"
                    />
                    <path
                      d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                      fill="#3B2D60"
                      stroke="#3B2D60"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                      fill="#3B2D60"
                      stroke="#3B2D60"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                      fill="#3B2D60"
                      stroke="#3B2D60"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <p class="font-mulish font-bold text-base leading-[20px] tracking-[.64px] text-white uppercase w-max mx-auto mt-3 md:mt-6">
                Share
              </p>

              <div class="flex w-max mx-auto gap-2 md:gap-4 mt-1 md:mt-[5px]">
                <div class="bg-white rounded-full p-2.5 w-max mx-auto mt-[10px] md:mt-[5px]">
                  <svg
                    class="h-2.5 md:h-5 w-2.5 md:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                      fill="#3B2D60"
                    />
                  </svg>
                </div>

                <div class="bg-white rounded-full p-2.5 w-max mx-auto mt-2 md:mt-[5px]">
                  <svg
                    class="h-2.5 md:h-5 w-2.5 md:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
                      fill="#3B2D60"
                    />
                  </svg>
                </div>

                <div class="bg-white rounded-full p-2.5 w-max mx-auto mt-[10px] md:mt-[5px]">
                  <svg
                    class="h-2.5 md:h-5 w-2.5 md:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 16V8C3.75 5.65279 5.65279 3.75 8 3.75H16C18.3472 3.75 20.25 5.65279 20.25 8V16C20.25 18.3472 18.3472 20.25 16 20.25H8C5.65279 20.25 3.75 18.3472 3.75 16Z"
                      fill="#3B2D60"
                      stroke="#3B2D60"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 6.51L17.51 6.49889"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-md lg:max-w-2xl mt-16 mx-2 sm:mx-auto backdrop-blur-md bg-white/20 rounded-[20px] py-5 px-10">
        <div class="text-center space-y-10 md:space-y-2 mb-[38px] md:mb-[28px]">
          <h3 class="text-white font-openSans font-bold text-[30px] tracking-tight">
            Contact us
          </h3>
          <p class="text-white font-normal font-mulish text-base leading-6">
            For further questions, including partnership opportunities, please
            email hello@creative- tim.com or contact using our contact form.
          </p>
        </div>
        <form className="space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="font-openSans font-bold text-white text-xs">
                Full Name
              </label>
              <input
                class="w-full mt-2 bg-white/50 focus:bg-white/70 placeholder-black/50 rounded-lg px-3 py-2.5 outline-none transition-all duration-500"
                id="grid-first-name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label class="font-openSans font-bold text-white text-xs">
                Email
              </label>
              <input
                class="w-full mt-2 bg-white/50 focus:bg-white/70 placeholder-black/50 rounded-lg px-3 py-2.5 outline-none transition-all duration-500"
                id="grid-first-name"
                type="text"
                placeholder="hello@creative-tim.com"
              />
            </div>
          </div>
          <div class="-mx-3 mb-6">
            <div class="w-full px-3 mb-[19px] md:mb-4">
              <label
                class="font-openSans font-bold text-white text-xs leading-[1px]"
                for=""
              >
                How can we help you?
              </label>
              <textarea
                rows="5"
                placeholder="Describe your problem in at least 250 characters "
                class="w-full mt-2 bg-white/50 focus:bg-white/70 placeholder-black/50 rounded-lg px-3 py-2.5 outline-none focus:border-gray-500 transition-all duration-500"
              />
            </div>
            <div class="flex justify-center w-full px-3">
              <button
                class="focus:shadow-outline rounded-lg bg-[#3B2D60] focus:outline-none shadow-[0px_4px_7px_-1px_rgba(0,0,0,0.11),0px_2px_4px_-1px_rgba(0,0,0,0.07)] text-white font-bold text-xs uppercase py-3 px-6"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
   </BasicLayout>
  );
};

export default Contact;
