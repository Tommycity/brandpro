import { Appbuttontransparent } from "./Appbuttontransparent";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGlobeAfrica,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { footerQuickLinks, rightMenuData } from "../../utils/data";
import { FooterInputButton } from "./FooterInputButton";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { AppButtonCircle } from "./AppButtonCircle";

export const Footer = () => {
  const [showMenuDropdown2, setshowMenuDropdown2] = useState(false);

  return (
    <div className="w-full flex flex-col bg-black px-5 lg:px-8">
      {/* top-footer-section */}
      <div className="flex flex-col md:items-center lg:flex-row lg:items-center gap-3 lg:gap-0 justify-between py-9 lg:py-6">
        <Appbuttontransparent title="BUSINESS ENQUIRY" />
      </div>

      {/* middle-footer-section */}
      <div className="py-12 w-full gap-9 lg:gap-0 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 border-y-[1px] border-stone-500">
        {/* left-column */}
        <div className="flex flex-col col-span-2 gap-5 lg:gap-7 w-full lg:w-[80%]">
          <img
            src="/imgs/new-images/BP_gold_logo.png"
            alt=""
            className="h-[80px] w-[100px]"
          />
          <p className="text-[16px]">
            Brandpro Exhibition Event Company Limited  was established in the year 2020 with a comprehensive and an extensive vision to cater the needs of the exhibition industry in the Africa
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <MdOutlineForwardToInbox className="text-xl" />
              <span className="mr-2">Email</span>
              <Link to="/" className="header-menu-link">
                Brandproexhibition@gmail.com 
              </Link>
            </div>
            <div className="flex gap-1">
              <MdOutlineForwardToInbox className="text-xl" />
              <span className="mr-2">Phone</span>
              <Link to="/" className="header-menu-link">
                +234 808 312 4442
              </Link>
            </div>
          </div>

          <div className="flex gap-2 text-[20px] lg:text-lg">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaXTwitter />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <IoLogoYoutube />
            </Link>
          </div>
        </div>

        {/* right-column */}
        <div className="flex flex-col col-span-2 gap-4 lg:gap-7 w-full">
          <h1 className="text-white font-semibold text-xl">Quick Links</h1>
          <div className="flex flex-col gap-3 w-full">
            {footerQuickLinks?.map((item, i) => (
              <Link
                to={item?.url}
                key={i}
                className="text-[16px] font-medium relative w-fit group"
              >
                <span className="relative z-10">{item?.title}</span>
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full z-0"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* bottom-footer-section */}
      <div className="flex justify-center py-6">
        <span>© 2025 Brandpro Exhibition Limited. All Rights Reserved.</span>
      </div>

      {/* The-notification-buttons */}
    </div>
  );
};
