import React from "react";

export const ExcelBeyondPage = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 flex gap-20 lg:gap-40 flex-col lg:flex-row items-center w-full">
      <div className="w-full lg:w-[35%] bg-[#e1341c] lg:ml-30 h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="/imgs/home/Services.webp"
          alt=""
          className="w-full h-full transition-transform rotate-10 hover:rotate-0 ease-in-out duration-800"
        />
      </div>

      <div className="flex flex-col gap-6 w-full lg:w-[60%] text-[18px] md:text-[20px] lg:text-[18px]">
        <h1 className="font-bold text-black text-2xl md:text-4xl lg:text-5xl">
          Excel Beyond: Elevating Your Possibilities
        </h1>
        <p>
          TSS Advertising stands as your dynamic and visionary advertising
          partner, driven by a commitment to delivering an extensive array of
          creative and innovative services.
        </p>

        <p>
          With our roots dating back to our establishment in 2008, TSS has
          witnessed exponential growth and now comprises a formidable team of
          400 dedicated professionals spread across various divisions.
          Leveraging our in-house production units strategically located in
          Jeddah, Riyadh, Dammam, UAE, Bahrain, Qatar, Kuwait, Oman, and Egypt,
          we have a robust presence throughout the Middle East region.
        </p>

        <p>
          Our service offerings are both comprehensive and diverse, enabling us
          to cater to a wide spectrum of needs. We specialize in strategic
          advertising/marketing, event management, fabrication, and
          communication services through state-of-the-art technology & qualified
          trained personnel.
        </p>
      </div>
    </div>
  );
};
