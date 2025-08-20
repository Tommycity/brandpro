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

        {/* middle Input */}
        <FooterInputButton placeholder="Subscribe to our newsletter" />

        <div className="flex gap-3">
          <Link
            to="/travel"
            className="flex gap-2 items-center uppercase header-menu-link"
          >
            <FaGlobeAfrica className="" />
            <span className="">Travel</span>
          </Link>

          <div className="border-r-[#212323] border-r-[1px]"></div>

          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer header-menu-link"
              onClick={() => setshowMenuDropdown2(!showMenuDropdown2)}
            >
              <span className="">SAUDI</span>
              <TiArrowSortedDown className="" />
            </div>

            <div
              className={
                showMenuDropdown2
                  ? "absolute bg-white shadow-2xl py-3 px-2 rounded-md text-black flex flex-col gap-1 top-[30px] -left-2 z-10"
                  : "hidden"
              }
            >
              {rightMenuData?.map((item, i) => (
                <Link to={item?.url} key={i} className="text-[10px]">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* middle-footer-section */}
      <div className="py-12 w-full gap-9 lg:gap-0 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 border-y-[1px] border-stone-500">
        {/* left-column */}
        <div className="flex flex-col col-span-2 gap-5 lg:gap-7 w-full lg:w-[80%]">
          <img
            src="/imgs/home/tss-logo-logo_headers_preview.webp"
            alt=""
            className="h-[60px] w-[150px]"
          />
          <p className="text-[16px]">
            TSS Advertising Company was established in the year 2008 with a
            comprehensive and an extensive vision to cater the needs of the
            advertising industry in the Middle East.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <MdOutlineForwardToInbox className="text-xl" />
              <span className="mr-2">Email</span>
              <Link to="/" className="header-menu-link">
                info@tss-adv.com
              </Link>
            </div>
            <div className="flex gap-1">
              <MdOutlineForwardToInbox className="text-xl" />
              <span className="mr-2">Phone</span>
              <Link to="/" className="header-menu-link">
                +966 9200 00619
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

        {/* middle-column */}
        <div className="flex flex-col col-span-1 gap-4 lg:gap-7 w-full">
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

        {/* right-column */}

        <div className="w-full col-span-2">
          <img src="/imgs/home/footer-map.png" alt="" />
        </div>
      </div>

      {/* bottom-footer-section */}
      <div className="flex justify-center py-6">
        <span>© 2025 TSS Advertising Company. All Rights Reserved.</span>
      </div>

      {/* The-notification-buttons */}
    </div>
  );
};
