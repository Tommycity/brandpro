import React from "react";
import { Link } from "react-router-dom";
import { blogData, blogs } from "../../utils/data";
import { ArrowButton } from "../../components/globals/ArrowButton";

export const BlogMain = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 flex flex-col gap-10 items-center">
      <span className="text-lg lg:text-xl">
        Portfolio of Leading Branding Company and Branding Agency in Riyadh,
        Dubai, Oman, Egypt, Bahrain, Jeddah, Dammam, India
      </span>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2">
        <div className="grid grid-cols-3 gap-4 md:flex ">
          {blogData?.map((item, i) => (
            <Link
              key={i}
              to="/"
              className="flex items-center justify-center text-[13px] font-semibold px-4 py-2 border-[1px] border-stone-300 hover:text-white hover:border-0 app-btn-white-bg rounded-full"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-6 justify-center cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-9 w-full">
          {blogs?.map((blog, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-3xl shadow-2xl p-3 gap-2"
            >
              <div className="overflow-hidden rounded-3xl group">
                <img
                  src={`/imgs/home/${blog.image}`}
                  alt={blog?.title}
                  className="h-80 w-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="">
                <h2 className="text-[15px] font-semibold mb-2">{blog.title}</h2>
                <Link
                  to={blog?.link}
                  className="flex items-center gap-2 text-[#282a39] text-[18px] font-semibold"
                >
                  <ArrowButton title="Learn More" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
