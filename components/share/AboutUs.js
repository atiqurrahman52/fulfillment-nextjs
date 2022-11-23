
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-10 xl:gap-28">
        <div className="">
          <Image
            className="h-[288px] md:h-[380px] xl:pl-36"
            src="/assets/images/about/about.png"
            alt=""
            width={526}
            height={380}
          />
        </div>
        <div className="space-y-6">
          <div className="font-mulish text-primary text-center md:text-left font-extrabold text-[26px] md:text-[40px] leading-[34px] md:leading-[48px]">
            <h3>It’s your business, we take the plight</h3>
          </div>
          <div className="font-poppins font-normal text-primary text-sm md:text-base leading-[24px] text-center md:text-justify opacity-[.4]">
            <p>
              Built on the latest e-commerce fulfillment logistics, IT-enabled
              operations, and state-of-the-art infrastructure, KX Fulfillment
              aims to transform your business into something more
              cost-effective, secure, customer-oriented, and sustainable. As a
              strategic logistics partner, KX Fulfillment employs tech-based
              sophisticated warehousing, inventory, and order processing
              facilities to ensure that you save your precious time while we are
              doing the day job for you!
            </p>
          </div>

          <div className="flex gap-5">
            <Image
              src="/assets/images/common/check-box.svg"
              alt=""
              width={24}
              height={24}
            />

            <h6 className="font-poppins font-semibold text-primary text-base leading-[24px] text-center">
              IT-enabled Warehouse
            </h6>
          </div>
          <div className="flex gap-5">
            <Image
              src="/assets/images/common/check-box.svg"
              alt=""
              width={24}
              height={24}
            />
            <h6 className="font-poppins font-semibold text-primary text-base leading-[24px] text-center">
              IT-enabled Warehouse
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
