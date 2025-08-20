import { AppBtnWhiteBg } from "../../components/globals/AppBtnWhiteBg";
import { Appbutton } from "../../components/globals/Appbutton";
import { AppButtonCircle } from "../../components/globals/AppButtonCircle";
import { Appbuttontransparent } from "../../components/globals/Appbuttontransparent";
import { Footer } from "../../components/globals/Footer";
import { Global_Herosection } from "../../components/globals/Global_Herosection";
import { Navbar } from "../../components/globals/Navbar";
import { careerCardData, careerPositionCard } from "../../utils/data";

export const Career = () => {
  return (
    <div>
      <Navbar />
      <Global_Herosection title="Join TSS Family" />

      <div className="p-5 md:p-20 lg:p-5 w-full flex flex-col gap-5">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-black text-2xl lg:text-5xl font-bold">
            Hello, <span className="text-[#ee682f]">We Are</span> Hiring
          </h1>
          <span className="text-[17px] text-center lg:w-[1100px]">
            We are looking for the most innovative minds to join us as we
            develop novel solutions that further energizes the brands of our
            clients. If you're ready to work up your talents, we invite you to
            be a member of our team!
          </span>
        </div>

        <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-5 mt-3">
          {careerCardData?.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 p-12 bg-[#f5f5f5] rounded-2xl relative z-10 overflow-hidden"
            >
              <h1 className="font-bold text-3xl relative z-20">
                {item?.serialNum}
              </h1>
              <h3 className="font-bold text-3xl relative z-20">
                {item?.title}
              </h3>
              <span className="text-[17px] leading-8 relative z-20">
                {item?.content}
              </span>

              <div className="absolute w-full top-0 left-0 bg-[#ee682f] rounded-4xl z-0 transition-all duration-500 h-[5px] group-hover:h-full"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 my-4 justify-center">
          <span className="font-bold text-3xl">Open Positions</span>
          <span className="text-[16px]">Find the role that fits.</span>
        </div>

        <div className="flex flex-col w-full gap-8 cursor-pointer">
          {careerPositionCard?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 md:gap-0 lg:flex-row lg:gap-3 w-full bg-white p-7 rounded-lg shadow-2xl"
            >
              <div className="lg:w-[40%] flex items-center font-semibold text-[26px]">
                {item?.title}
              </div>

              <div className="flex flex-col lg:flex-row lg:w-[30%] text-[16px] gap-3">
                <div className="flex items-center gap-1 w-[30%]">
                  <img
                    src={`/imgs/home/${item?.image[0]}`}
                    alt="location"
                    className="w-4 h-4"
                  />
                  <div>{item?.location}</div>
                </div>

                <div className="flex items-center gap-1 w-[30%]">
                  <img
                    src={`/imgs/home/${item?.image[1]}`}
                    alt="duration"
                    className="w-4 h-4"
                  />
                  <div>{item?.duration}</div>
                </div>

                <div className="flex items-center gap-2 w-[30%]">
                  <span>Vacancy</span>
                  <div className="py-2 px-4 rounded-full font-bold bg-[#efefef] text-[21px]">
                    1
                  </div>
                </div>
              </div>

              <div className="flex gap-2 lf:w-[30%] lg:items-center lg:justify-center md:mt-4 lg:mt-0">
                <AppBtnWhiteBg
                  title="Read More"
                  backgroundColor="#efefef"
                  fontweight="bold"
                />
                <Appbutton title="Apply" fontSize="15px" fontWeight="bold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
