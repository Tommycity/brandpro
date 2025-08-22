import { Link } from "react-router-dom";
import { middleMenuData, rightMenuData } from "../../utils/data";
import { FaGlobeAfrica } from "react-icons/fa";
import { Appbutton } from "../globals/Appbutton";
import { TiArrowSortedDown } from "react-icons/ti";

import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

// Navbar component
export const Navbar = () => {
  // dropdownOpen controls which dropdown is open: null (none), 'menu', or 'saudi'
  const [dropdownOpen, setDropdownOpen] = useState(null); // null | 'menu' | 'saudi'
  // submenuOpenIndex controls which submenu is open in mobile menu (null or index)
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null); // null or index
  // scrolled controls navbar background color on scroll
  const [scrolled, setScrolled] = useState(false);

  // Effect to change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to close dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      // If click is NOT inside a dropdown trigger or dropdown content, close all dropdowns and submenus
      if (
        !e.target.closest(".dropdown-trigger") &&
        !e.target.closest(".dropdown-content")
      ) {
        setDropdownOpen(null);
        setSubmenuOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between py-5 px-3 lg:6 transition-colors duration-300 ${
        scrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      {/* logo */}
      <div className=" w-[30%] lg:w-[10%]">
        <img
          src="/imgs/home/tss-logo-logo_headers_preview.webp"
          alt=""
          className=""
        />
      </div>

      {/* Middle Menu */}
      <div className="hidden w-[58%] lg:flex items-center justify-end pr-5 gap-4 ">
        {middleMenuData.map((item, index) => (
          <div key={index} className="">
            {item?.children ? (
              // Dropdown trigger for menu
              <div
                className="relative uppercase dropdown-trigger"
                // Toggle menu dropdown: open if closed, close if open
                onClick={() =>
                  setDropdownOpen(dropdownOpen === "menu" ? null : "menu")
                }
              >
                <div className="flex items-center gap-2 cursor-pointer header-menu-link">
                  <span className="">{item?.title}</span>
                  <TiArrowSortedDown className="" />
                </div>

                {/* Dropdown content for menu, only visible if dropdownOpen === 'menu' */}
                <div
                  className={
                    dropdownOpen === "menu"
                      ? "absolute bg-white shadow-2xl py-3 px-2 rounded-md text-black flex flex-col gap-1 top-[30px] -left-20 z-10 dropdown-content"
                      : "hidden"
                  }
                >
                  {item?.children?.map((childItem, childIndex) => (
                    <Link
                      key={childIndex}
                      to={childItem?.url}
                      className="flex flex-col text-[12px]"
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
      <div className="hidden w-[25%] lg:w-[32%] lg:flex items-center justify-end gap-4">
        {/* Dropdown trigger for SAUDI */}
        <div className="relative dropdown-trigger">
          <div
            className="flex items-center gap-2 cursor-pointer header-menu-link"
            // Toggle SAUDI dropdown: open if closed, close if open
            onClick={() =>
              setDropdownOpen(dropdownOpen === "saudi" ? null : "saudi")
            }
          >
            <span className="">SAUDI</span>
            <TiArrowSortedDown className="" />
          </div>

          {/* Dropdown content for SAUDI, only visible if dropdownOpen === 'saudi' */}
          <div
            className={
              dropdownOpen === "saudi"
                ? "absolute bg-white shadow-2xl py-3 px-2 rounded-md text-black flex flex-col gap-1 top-[30px] -left-2 z-10 dropdown-content"
                : "hidden"
            }
          >
            {rightMenuData?.map((item, i) => (
              <Link to={item?.url} key={i} className="text-[12px]">
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

      {/* trigram menu for mobile, toggles menu dropdown */}
      <div
        className="text-[#ff930f] text-4xl md:text-6xl lg:hidden dropdown-trigger"
        onClick={() => setDropdownOpen(dropdownOpen === "menu" ? null : "menu")}
      >
        <MdMenu />
      </div>

      {/* the-white-background-hover.menu for mobile, shows menu dropdown if open */}
      <div
        className={
          dropdownOpen === "menu"
            ? "absolute top-2 right-1 left-1 md:right-4 md:mr-0 mx-auto bg-white w-[94vw] md:w-[50vw] flex items-start justify-between text-black py-5 px-5 lg:hidden "
            : "hidden"
        }
      >
        <div className="w-[80%] flex flex-col">
          {/* top: menu items */}
          <div className="flex flex-col gap-4">
            {middleMenuData.map((item, index) => (
              <div key={index} className="">
                {item?.children ? (
                  // Dropdown trigger for submenu (mobile)
                  <div
                    className="relative uppercase dropdown-trigger"
                    onClick={() =>
                      setSubmenuOpenIndex(
                        submenuOpenIndex === index ? null : index
                      )
                    }
                  >
                    <div className="flex items-center gap-2 cursor-pointer header-menu-link">
                      <span className="">{item?.title}</span>
                      <TiArrowSortedDown className="" />
                    </div>

                    {/* Dropdown content for submenu (mobile) */}
                    <div
                      className={
                        submenuOpenIndex === index
                          ? "absolute bg-white shadow-2xl py-3 px-2 rounded-md text-black text-2xl flex flex-col gap-2 top-[30px] left-0 z-10 dropdown-content"
                          : "hidden"
                      }
                    >
                      {item?.children?.map((childItem, childIndex) => (
                        <Link
                          key={childIndex}
                          to={childItem?.url}
                          className="flex flex-col text-[14px]"
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

          {/* bottom: SAUDI dropdown and other items (mobile) */}
          <div className="flex flex-col gap-4">
            {/* Dropdown trigger for SAUDI (mobile) */}
            <div className="relative dropdown-trigger">
              <div
                className="flex items-center gap-2 cursor-pointer header-menu-link mt-4"
                onClick={() =>
                  setSubmenuOpenIndex(
                    submenuOpenIndex === "saudi" ? null : "saudi"
                  )
                }
              >
                <span className="">SAUDI</span>
                <TiArrowSortedDown className="" />
              </div>

              {/* Dropdown content for SAUDI (mobile) */}
              <div
                className={
                  submenuOpenIndex === "saudi"
                    ? "absolute bg-white shadow-2xl py-3 px-2 rounded-md text-black flex flex-col gap-1 top-[55px] -left-2 z-10 dropdown-content"
                    : "hidden"
                }
              >
                {rightMenuData?.map((item, i) => (
                  <Link to={item?.url} key={i} className="text-[12px]">
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

        {/* mobile-menu button, toggles menu dropdown */}
        <div
          className="text-[#ff930f] text-4xl lg:hidden dropdown-trigger"
          onClick={() =>
            setDropdownOpen(dropdownOpen === "menu" ? null : "menu")
          }
        >
          <MdMenu />
        </div>
      </div>
    </div>
  );
};
