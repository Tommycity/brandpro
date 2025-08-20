import { Appbutton } from "../../components/globals/Appbutton";
import { Navbar } from "../../components/globals/Navbar";
import { Appbuttontransparent } from "../../components/globals/Appbuttontransparent";

export const Herosection = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-[85%] lg:h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/tss_adv.mp4"
      />
      <Navbar />

      {/* Other content can go here */}
      <div className="absolute z-10 top-[18%] md:top-[20%] flex flex-col gap-7 lg:gap-8 w-full h-full p-5">
        <div className="flex flex-col font-bold text-white leading-[45px] md:leading-[60px] lg:leading-[70px]">
          <span className="text-[30px] md:text-[50px] lg:text-[60px] uppercase">
            To be seen ...
          </span>
          <span className="text-[30px] md:text-[50px] lg:text-[60px] uppercase">
            To be noticed
          </span>
        </div>

        <span className="text-white text-[15px] md:text-[17px]">
          The Fastest Growing Indoor and Outdoor Advertising Agency in the
          middle East.
        </span>

        <div className="flex gap-8 lg:gap-20">
          <div className="flex flex-col text-[#c74e45]">
            <span className="text-[19px] md:text-[40px] lg:text-[40px] font-bold">
              10000+
            </span>
            <span className="text-[19px] md:text-[30px] lg:text-[40px] font-bold">
              Projects
            </span>
          </div>
          <div className="flex flex-col text-[#c74e45]">
            <span className="text-[19px] md:text-[30px] lg:text-[40px] font-bold">
              5000+
            </span>
            <span className="text-[19px] md:text-[30px] lg:text-[40px] font-bold">
              Clients
            </span>
          </div>
          <div className="flex flex-col text-[#c74e45]">
            <span className="text-[19px] md:text-[30px] lg:text-[40px] font-bold">
              8+
            </span>
            <span className="text-[19px] md:text-[30px] lg:text-[40px] font-bold">
              Countries
            </span>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <Appbutton title="CONTACT US" />
          <Appbuttontransparent title="OUR WORKS" />
        </div>
      </div>
    </div>
  );
};
