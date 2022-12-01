import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  // <Link href="/">
  //       <div className="relative h-[45px] md:h-[54px] w-[126px] md:w-[176px] mx-auto lg:mx-0">
  //         <Image src="/assets/images/footer/Logo.png" layout="fill" alt="" />
  //       </div>
  //     </Link>

  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className="w-full shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] bg-white
      md:pb-5 md:pt-6 sticky top-0 left-0 z-50  transition-all duration-500 "
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:block">
            <Link href="/">
              <Image
                className="w-[120px] md:w-[175px]"
                src="/assets/images/logo/logo.png"
                alt="logo"
                width={175}
                height={38}
              />
            </Link>

            <div className="md:hidden">
              <button className="p-2 " onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#1F425D]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="text-[#1F425D]"
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.82812"
                      y="5.68213"
                      width="10.0859"
                      height="2.8817"
                      rx="1.44085"
                      fill="#1F425D"
                      fillOpacity="0.9"
                    />
                    <rect
                      x="2.82812"
                      y="11.4456"
                      width="20.1719"
                      height="2.8817"
                      rx="1.44085"
                      fill="#1F425D"
                      fillOpacity="0.9"
                    />
                    <rect
                      x="2.82812"
                      y="17.209"
                      width="12.9676"
                      height="2.8817"
                      rx="1.44085"
                      fill="#1F425D"
                      fillOpacity="0.9"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-4 mt-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-10 md:space-y-0">
              <li className=" font-poppins font-medium text-tertiary text-sm md:text-base">
                <Link href="/">Home</Link>
              </li>
              {/* <li className="font-poppins font-medium text-tertiary text-sm md:text-base">
                <Link href="#">Services</Link>
              </li> */}

              <li className="font-poppins font-medium text-tertiary text-sm md:text-base">
                <Link href="about">About Us</Link>
              </li>
              <li className="font-poppins font-medium text-tertiary text-sm md:text-base">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="font-poppins font-medium text-tertiary text-sm md:text-base">
                <Link href="faq">
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
