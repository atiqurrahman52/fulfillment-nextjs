import Image from "next/image";
import { reviewsData } from "../../data/reviewsData";

const Reviews = () => {
  return (
    <div className="container py-10 xl:py-16">
      <div className="grid lg:grid-cols-2 gap-y-10 md:gap-y-16">
        {reviewsData.map(({ id, title, details, img }) => {
          return (
            <div key={id}>
              {id === 0 ? (
                <div className="lg:max-w-[360px] space-y-3 xl:space-y-6">
                  <h3 className="font-workSans font-semibold text-2xl xl:text-4xl text-center xl:text-left text-primary">
                    {title}
                  </h3>
                  <p className="font-poppins text-sm text-center xl:text-left text-[#7D899A]">
                    {details}
                  </p>
                </div>
              ) : (
                <div
                  className={`relative bg-white text-[#7F8B9C] font-poppins text-sm rounded-lg lg:rounded-[10px] px-5 md:px-10 py-3 md:py-14 shadow-[0px_4px_28px_0px_rgba(0,0,0,0.1)] md:max-w-[550px] lg:max-w-[400px] xl:max-w-[460px] ${
                    id === 2 ? "mr-16" : "ml-2"
                  } ${
                    (id === 2 && "w-full md:w-max md:ml-auto") ||
                    (id === 3 && "w-full lg:w-max lg:ml-auto lg:mt-16")
                  }`}
                >
                  <p className={`text-sm ${id !== 2 && "indent-8"}`}>
                    {details}
                  </p>
                  <Image
                    className={`absolute -top-5 md:-top-8 ${
                      id === 1 || id === 3
                        ? "-left-5 md:-left-8"
                        : "-right-4 lg:-left-8"
                    } w-[50px] md:w-[83px] h-[50px] md:h-[83px]`}
                    src={img}
                    alt=""
                    width={83}
                    height={83}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
