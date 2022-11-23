import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";

// data

import { socialIconsSvg } from "../../data/svgData";
const Footer = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 py-5 md:py-10 gap-6 border-b-[1px] border-gray">
        <div className="space-y-6">
         
          <Image
            className="w-max mx-auto lg:mx-0"
            src="/assets/images/logo/logo.png"
            alt=""
            width={175}
            height={38}
          />
          <p className="font-mulish font-normal text-gray text-center md:text-left text-sm md:text-base leading-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>
          <div className="flex justify-center items-center gap-[22px] w-max lg:mx-0 mx-auto">
            {socialIconsSvg.map((item, i) => {
              return (
              
                <Link key={i} href={item.path} target="_blank" className="">
                  <p
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                    className=""
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-mulish font-bold text-base leading-[22px] text-primary text-center md:text-left mb-5 md:mb-10">
            Services
          </h3>
          <Link
            href="#"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Order Processing
          </Link>
          <Link
            href="#"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Inventory Quality Control (QC)
          </Link>
          <Link
            href="#"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Inventory Audit
          </Link>
          <Link
            href="#"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Marketing & Promotion
          </Link>
          <Link
            href="#"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Return Inventory Management
          </Link>
          <Link
            href="#"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Marketplace Solutions
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-mulish font-bold text-base leading-[22px] text-primary text-center md:text-left mb-5 md:mb-10">
            Company
          </h3>
          <Link
            href="/about"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Contact us
          </Link>
          <Link
            href="/career"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            Careers
          </Link>

          <Link
            href="/faq"
            className="font-mulish font-normal text-sm md:text-base leading-5  text-[#888B96] mb-3 md:mb-[18px]"
          >
            F&Q
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-mulish font-bold text-base leading-[22px] text-primary text-center md:text-left mb-5 md:mb-10">
            Contact us
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-[6px] mb-3 md:mb-[18px]">
            <i className="ph-envelope-simple text-xl w-max mx-auto lg:mx-0"></i>
            <EnvelopeSimple
              className="text-xl w-max mx-auto lg:mx-0 text-primary"
              size={20}
            />
            <a
              href="mailto:contact@company.com"
              className="font-mulish font-normal text-sm md:text-base leading-5  flex justify-center items-center text-[#888B96]"
            >
              contact@company.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-[6px] mb-3 md:mb-[18px]">
            <Phone
              className="text-xl w-max mx-auto lg:mx-0 text-primary"
              size={20}
            />
            <Link
              href="tel:(414) 687 - 5892"
              className="font-mulish font-normal text-sm md:text-base leading-5 flex justify-center items-center text-[#888B96]"
            >
              (414) 687 - 5892
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-[6px] mb-3 md:mb-[18px]">
            <MapPin
              className="text-xl w-max mx-auto lg:mx-0 text-primary"
              size={20}
            />
            <p className="font-mulish font-normal text-sm md:text-base leading-5  flex justify-center items-center text-[#888B96]">
              794 Mcallister St <br />
              Knoxville, TN
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start py-5 md:py-10">
        <div className="w-max mx-auto md:mx-0 font-mulish font-normal text-sm md:text-lg leading-[30px] text-gray">
          <p>Copyright &copy; 2022 Pickme</p>
        </div>
        <div className="flex flex-wrap divide-x- font-mulish font-normal text-sm md:text-lg text-center  gap- mt-2 md:mt-0">
          <div className="px-1 text-gray">
            <Link href="/legal" className="rightBord">
              All Rights Reserved
            </Link>{" "}
            <span>|</span>
          </div>
          <div className="px-1 text-gray">
            <Link href="/legal" className="border-b">
              Terms and Conditions
            </Link>{" "}
            <span>|</span>
          </div>
          <div className="px-1 text-gray">
            <Link href="/legal" className="border-b">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
