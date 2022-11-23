import Image from "next/image";
import React from "react";

const HandleOrder = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-10 md:gap-[26px]">
        <div className="">
          <Image
            className="w-full  md:h-full"
            src="/assets/images/home/handle_order.png"
            alt=""
            width={636}
            height={636}
          />
        </div>
        <div className="space-y-5 pt-10 gap-6">
          <p className="font-mulish font-extrabold text-primary text-[26px] md:text-[40px] leading-[34px] md:leading-[48px] text-center md:text-left">
            Let us handle order fulfillment, so you can focus on building your
            Brand.
          </p>
          <p className="font-mulish font-medium text-primary text-sm md:text-base leading-6 text-center md:text-left opacity-[.4]">
            Fulfyld is an ecommerce fulfillment focused 3PL company, meaning we
            handle everything from storage, to picking, packing and shipping
            your ecommerce orders. We integrate seamlessly with all major
            eCommerce software and shopping cart platforms. Plus, we are
            friendly, professional, and extremely efficient. All of our
            customers get a dedicated account manager to make their fulfillment
            for ecommerce a breeze.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HandleOrder;
