import { useRef, useEffect } from "react";
import { ArrowButton } from "../../components/globals/ArrowButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogs } from "../../utils/data";

export const BlogToRead = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 400
        ) {
          container.scrollTo({ left: 0, behavior: "auto" });
        } else {
          container.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col container">
      <div className="flex flex-col  md:flex-row gap-4 items-center justify-between px-8 text-black mb-0">
        <h1 className="text-2xl md:text-6xl font-bold text-[#282A39]">
          Blogs to Read
        </h1>
        <ArrowButton title="VIEW MORE" />
      </div>

      <div className="relative px-5 md:p-8">
        {/* next AND previous buttons */}
        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={() => scroll("left")}
            className="bg-black border border-gray-300 rounded-full p-4 shadow-md hover:bg-gradient-to-r from-[#E34231] to-[#F28247] absolute left-0 bottom-1/2"
            aria-label="Scroll Left"
          >
            <FaArrowLeft className="text-white h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-black text-white  rounded-full p-4 shadow-md absolute right-0 bottom-1/2 hover:bg-gradient-to-r from-[#E34231] to-[#F28247]"
            aria-label="Scroll Right"
          >
            <FaArrowRight className=" h-5 w-5" />
          </button>
        </div>

        {/* blog cards */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto  hide-scrollbar scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {blogs?.map((blog, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 lg:w-[400px] bg-white rounded-3xl  overflow-hidden shadow-2xl p-3 "
            >
              <div className="overflow-hidden rounded-3xl group">
                <img
                  src={`/imgs/home/${blog.image}`}
                  alt={blog?.title}
                  className="h-80 w-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
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
