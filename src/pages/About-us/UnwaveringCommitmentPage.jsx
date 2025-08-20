import React from "react";

export const UnwaveringCommitmentPage = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5">
      <div className="flex flex-col lg:flex-row gap-10 items-center w-full mb-20">
        <div className="w-full lg:w-[35%] flex flex-col lg:flex-row items-center h-full">
          <div className="flex flex-col gap-3 items-center w-[50%]">
            <span className="text-[40px] font-bold text-[rgb(199,78,69)]">
              10000+
            </span>
            <span className="text-[19px] font-bold">Projects</span>
          </div>

          <div className="w-[50%] flex flex-col items-center border-0 lg:border-[#66666646] lg:border-l-[1px]">
            <div className="flex flex-col items-center gap-1 border-b-none lg:border-[#66666646] lg:border-b-[1px] w-full py-5">
              <span className="text-[40px] font-bold text-[#c74e45]">
                5000+
              </span>
              <span className="text-[19px] font-bold">Projects</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-5">
              <span className="text-[40px] font-bold text-[#c74e45]">8+</span>
              <span className="text-[19px] font-bold">Projects</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 w-full lg:w-[60%]">
          <h1 className="text-[27px] lg:text-[44px] lg:w-[650px] text-black font-bold">
            Unwavering Commitment to Your Success
          </h1>
          <p className="text-lg">
            TSS Advertising established its strong presence across the GCC &
            Middle East region and flourished over time through the remarkable
            experiences we offer our clients, becoming a leading model for the
            industry.
          </p>
          <p className="text-lg">
            Going above what’s asked & beyond expectations, we became the #1
            choice for our clients when it comes to exhibition stands,
            advertising services, and event companies in Dubai, Saudi Arabia,
            Egypt, Oman, and Bahrain.
          </p>
          <p className="text-lg">
            We aspire to become a worldwide leader in our industries by
            empowering our clients through solutions that enrich both
            individuals and businesses to accomplish their goals.
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-[35%] h-[370px] rounded-3xl overflow-hidden">
          <img
            src="/imgs/home/HOME--MDL-about_image.webp"
            alt=""
            className="w-full h-full rounded-3xl transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="w-full lg:w-[65%] h-[370px] rounded-3xl overflow-hidden">
          <img
            src="/imgs/home/HOME-F1-about_image_two.webp"
            alt=""
            className="w-full h-full rounded-3xl transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="absolute top-[320px] lg:top-[120px] lg:left-[465px] flex items-center justify-center">
          <span className="absolute w-24 h-24 rounded-s-2xl rounded-tr-2xl bg-white opacity-30 animate-ripple"></span>
          <img
            src="/imgs/home/play-circle.svg"
            alt=""
            className=" bg-white p-3 rounded-s-2xl rounded-tr-2xl z-10"
          />
        </div>
      </div>
    </div>
  );
};
