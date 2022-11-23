import Image from "next/image";
import React from "react";

const WarehouseManage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-6">
        <div className="space-y-6 pt-10 gap-6">
          <h3 className="font-mulish font-extrabold text-primary text-[26px] md:text-[40px] leading-[34px] md:leading-[48px] text-center md:text-left">
            Warehouse managment Software
          </h3>
          <p className="font-mulish font-medium text-primary text-sm md:text-base leading-[24px] md:leading-[22px] text-center md:text-justify opacity-[.4]">
            Simple, flexible, proprietary Warehouse Management Software gives
            brands real-time insights into their inventory for forecasting,
            inventory planning and order tracking.
          </p>
        </div>
        <div>
          <Image src="/assets/images/home/warehouse.png" alt=""
          width={636}
          height={409}
           />
        </div>
      </div>
    </div>
  );
};

export default WarehouseManage;
