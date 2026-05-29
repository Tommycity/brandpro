import { useRef, useEffect } from "react";
import { contacts } from "../../utils/data";
import { useCarousel } from "../../hooks/useCarousel";
import { FaHouseUser } from "react-icons/fa";
import { MdAttachEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const ContactSlider = () => {
  return (
    <div className="px-8 pb-8 py-20">
      <h2 className="text-4xl font-bold mb-4 text-[#282A39] text-center">
        We are Located At
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:text-2xl lg:gap-4 rounded-md border border-gray-300 p-4 shadow-md">
        <div className="flex items-center gap-2 hover:bg-gray-100 p-4 rounded-md transition-colors duration-300">
          <FaHouseUser className="lg:text-[22px]" />
          <span>Lagos, Nigeria </span>
        </div>

        <div className="flex items-center gap-4 hover:bg-gray-100 p-4 rounded-md transition-colors duration-300">
          <MdAttachEmail className="lg:text-[22px]" />
          <div className="flex flex-col">
            <span>Brandproexhibition@gmail.com</span>
            <span>Info @brandproexhibition.com</span>
          </div>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-100 p-4 rounded-md transition-colors duration-300">
          <MdPhoneInTalk className="lg:text-[22px]" />
          <span>+234 808 312 4442</span>
        </div>

        <div className="flex items-center gap-4 hover:bg-gray-100 p-4 rounded-md transition-colors duration-300">
          <IoLocationOutline className="lg:text-[22px]" />
          <div className="flex flex-col">
            <span>17, Awe Street, Somolu, Lagos</span>
            <span>7, Bailey Street, Somolu Lagos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
