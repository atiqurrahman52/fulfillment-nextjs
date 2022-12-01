import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// data
import { servicesData } from "../../data/services";

const plus = () => {
  return (
    <div className="">
      <Image
        src="/assets/images/home/plus.svg"
        layout="fill"
        alt=""
        width={44}
        height={44}
      />
    </div>
  );
};
const minus = () => {
  return (
    <div className="">
      <Image
        src="/assets/images/home/minus.svg"
        layout="fill"
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
};

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="container py-10 xl:py-16">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 xl:col-span-1">
          <Image
            src="/assets/images/home/our-service.png"
            alt=""
            className="max-h-[592px] w-full hidden xl:block"
            width={322}
            height={623}
          />
          <p className="px-6 py-9 bg-success text-white font-semibold rounded-[10px] xl:hidden">
            Our service
          </p>
        </div>
        <div className="col-span-4 xl:col-span-3 grid xl:grid-cols-3 gap-4 xl:gap-6">
          {servicesData.map(({ id, header, description }) => {
            return (
              <div
                key={id}
                onClick={() => setActive(active === id ? "" : id)}
                className={`relative px-4 xl:px-6 py-3 xl:py-10 rounded-[10px] xl:rounded-[20px] flex items-center cursor-pointer ${
                  active === id
                    ? "bg-[#EFF0F1]"
                    : "bg-white shadow-[0px_4px_28px_0px_rgba(0,0,0,0.1)]"
                }`}
              >
                <div>
                  <h3 className="text-primary text-sm xl:text-2xl font-bold">
                    {header}
                  </h3>
                  {active === id && (
                    <p className="text-primary/40 text-sm mt-4">
                      {description}
                    </p>
                  )}
                </div>
                <div
                  className={`absolute ${
                    active === id
                      ? "-top-2 right-4"
                      : "top-1/2 -translate-y-1/2 xl:translate-y-0 right-4"
                  } xl:-top-5 xl:right-6`}
                >
                  <Image
                    src={active === id ? minus : plus}
                    alt=""
                    className="h-7 xl:h-10 w-7 xl:w-10"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
