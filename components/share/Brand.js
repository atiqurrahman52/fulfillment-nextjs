import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { brands } from "../../data/brandData"
import Image from "next/image";

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    autoplay: true,
    arrows: false,
    speed: 8000,

    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="brand-logos py-10 md:py-16">
        <Slider {...settings}>
          {brands.map((partner) => (
            <div key={partner.id}>
              <div>
                <Image
                  className="grayscale hover:grayscale-0 w-[70px] lg:w-[100px] h-5 lg:h-14 object-contain mx-auto my-2"
                  src={partner.img}
                  alt=""
                  width={150}
                  height={50}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
