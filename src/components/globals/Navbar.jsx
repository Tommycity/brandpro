import { Link } from "react-router-dom";
import { middleMenuData, rightMenuData } from "../../utils/data";
import { FaGlobeAfrica } from "react-icons/fa";
import { Appbutton } from "../globals/Appbutton";
import { TiArrowSortedDown } from "react-icons/ti";

import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

export const Navbar = () => {
  const [showMenuDropdown, setshowMenuDropdown] = useState(false);
  const [showMenuDropdown2, setshowMenuDropdown2] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between py-5 px-3 lg:6 transition-colors duration-300 ${
        scrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      {/* logo */}
      <div className="w-[35%] lg:w-[20%]">
        <img
          src="/imgs/home/tss-logo-logo_headers_preview.webp"
          alt=""
          className=""
        />
      </div>

      {/* Middle Menu */}
      <div className="hidden w-[60%] lg:flex items-center justify-end pr-5 gap-4 ">
        {middleMenuData.map((item, index) => (
          <div key={index} className="">
            {item?.children ? (
              <div
                className="relative uppercase"
                onClick={() => setshowMenuDropdown(!showMenuDropdown)}
              >
                <div className="flex items-center gap-2 cursor-pointer header-menu-link">
                  <span className="">{item?.title}</span>
                  <TiArrowSortedDown className="" />
                </div>

                <div
                  className={
                    showMenuDropdown
                      ? "absolute bg-white shadow-2xl py-3 px-2 rounded-md text-black flex flex-col gap-1 top-[30px] -left-20 z-10 "
                      : "hidden"
                  }
                >
                  {item?.children?.map((childItem, childIndex) => (
                    <Link
                      key={childIndex}
                      to={childItem?.url}
                      className="flex flex-col text-[10px]"
                    >
                      {childItem?.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link className="flex uppercase header-menu-link" to={item?.url}>
                {item?.title}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* right-aside-menu */}
      <div className="hidden w-[25%] lg:flex items-center justify-end gap-4">
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer header-menu-link"
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

        <Link
          to="/travel"
          className="flex gap-2 items-center uppercase header-menu-link"
        >
          <FaGlobeAfrica className="" />
          <span className="">Travel</span>
        </Link>

        <Appbutton title="BUSINESS ENQUIRY" />
      </div>

      {/* responsive header section for mobile */}

      {/* trigram menu */}
      <div
        className="text-[#ff930f] text-4xl md:text-6xl lg:hidden"
        onClick={() => setshowMenuDropdown(!showMenuDropdown)}
      >
        <MdMenu />
      </div>

      {/* the-white-background-hover.menu */}
      <div
        className={
          showMenuDropdown
            ? "bg-white w-full flex items-start text-black py-5 px-3 lg:hidden"
            : "hidden"
        }
      >
        <div className="w-[70%] flex flex-col">
          {/* top */}
          <div className="flex flex-col gap-4">
            {middleMenuData.map((item, index) => (
              <div key={index} className="">
                {item?.children ? (
                  <div
                    className="relative uppercase"
                    onClick={() => setshowMenuDropdown(!showMenuDropdown)}
                  >
                    <div className="flex items-center gap-2 cursor-pointer header-menu-link">
                      <span className="">{item?.title}</span>
                      <TiArrowSortedDown className="" />
                    </div>

                    <div
                      className={
                        showMenuDropdown
                          ? "absolute bg-white shadow-2xl py-3 px-2 rounded-md text-black flex flex-col gap-1 top-[30px] -left-20 z-10 "
                          : "hidden"
                      }
                    >
                      {item?.children?.map((childItem, childIndex) => (
                        <Link
                          key={childIndex}
                          to={childItem?.url}
                          className="flex flex-col text-[10px]"
                        >
                          {childItem?.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    className="flex uppercase header-menu-link"
                    to={item?.url}
                  >
                    {item?.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* bottom */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer header-menu-link"
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

            <Link
              to="/travel"
              className="flex gap-2 items-center uppercase header-menu-link"
            >
              <FaGlobeAfrica className="" />
              <span className="">Travel</span>
            </Link>

            <Appbutton title="BUSINESS ENQUIRY" />
          </div>
        </div>

        {/* mobile-menu */}
        <div
          className="text-[#ff930f] text-4xl lg:hidden"
          onClick={() => setshowMenuDropdown(!showMenuDropdown)}
        >
          <MdMenu />
        </div>
      </div>
    </div>
  );
};
