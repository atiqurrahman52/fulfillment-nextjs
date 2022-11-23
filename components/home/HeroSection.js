import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-6">
        <div className="space-y-[20px]">
          <p className="font-poppins font-bold text-2xl md:text-[40px] xl:pt-24 leading-[34px] md:leading-[56px] text-center flex md:text-left text-[#3B2D60]">
            Trusted delivery solutions for Your Business
          </p>
          <p className="font-mulish font-medium text-[14px] xl:pr-16 md:text-[16px] leading-6 text-center md:text-left text-[#3B2D6066]/40">
            Fulfillment.com (FDC) helps you reduce your shipping costs, automate
            your fulfillment, and expand into new markets.
          </p>
        </div>
        <div>
          <Image src="/assets/images/home/feature.png"
           alt=""
           width={636}
           height={345}
            />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
