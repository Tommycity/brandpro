import React from "react";
import { ContactInputBtn } from "../../components/globals/ContactInputBtn";
import { contactFormData } from "../../utils/data";
import { Appbutton } from "../../components/globals/Appbutton";

export const Main = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 bg-[#1b1b1b]">
      <div className="flex flex-col items-center gap-4 p-8">
        <h1 className="text-5xl font-bold text-[#282a39] mb-5">Let's Talk</h1>
        <span className="text-[14px] md:text-lg w-full lg:w-[1000px] text-center mb-3">
          When we spark a dialogue, we weave ideas together and eagerly await
          your questions to offer comprehensive responses. Communication is key,
          and we keep a keen eye for it at each stage to ensure seamless synergy
          .. Still want to know more?
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {contactFormData?.map((item, i) => (
            <div className="flex items-center w-full" key={i}>
              <ContactInputBtn placeholder={item?.placeholder} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center mt-4 gap-5">
        <span className="text-lg">Are you existing client</span>
        <span className="flex items-center gap-1">
          <div className="rounded-full h-3 w-3 bg-white"></div>
          <span className="text-lg text-white">Yes</span>
        </span>
        <span className="flex items-center gap-1">
          <div className="rounded-full h-3 w-3 bg-white"></div>
          <span className="text-lg text-white">No</span>
        </span>
      </div>

      <div className="flex items-center mt-4 gap-3">
        <input type="checkbox" name="" id="" className="bg-white" />
        <span className="text-[16px] lg:text-lg">
          Yes, I would like TSS to contact me based on the information provided
          above.
        </span>
      </div>

      <div className="text-center mt-15">
        <Appbutton title="SUBMIT" fontSize="16px" color="white" />
      </div>
    </div>
  );
};
