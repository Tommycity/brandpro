import { AboutUs_Hero_Btn } from "./AboutUs_Hero_Btn";
import { AboutUsTransBtn } from "./AboutUsTransBtn";

export const Global_Herosection = ({ title, fontSize, width, lineHeight }) => {
  return (
    <div className="about-us-hero-image w-full relative">
      <div className="flex flex-col items-center pb-[80px] pt-[150px] gap-7 lg:gap-8 w-full h-full p-5">
        <div className="flex flex-col font-bold text-white leading-[45px] md:leading-[60px] lg:leading-[70px] z-10">
          <span
            style={{ fontSize: fontSize, width: width, lineHeight: lineHeight }}
            className="text-[20px] w-[290px] leading-6 md:leading-12 lg:leading-none lg:w-[600px] md:text-[50px] lg:text-[50px] uppercase text-center"
          >
            {title}
          </span>
        </div>

        <div className="flex gap-4 mt-4 z-10">
          <AboutUs_Hero_Btn title="CONTACT US" />
          <AboutUsTransBtn title="OUR WORKS" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full bg-black/70 h-full"></div>
    </div>
  );
};
