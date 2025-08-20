import { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { contacts } from "../../utils/data";

export const ContactSlider = () => {
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
      const container = sliderRef.current;
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const isAtEnd = container.scrollLeft >= maxScrollLeft - 10;

        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-8 pb-8 py-20">
      <h2 className="text-4xl font-bold mb-18 text-[#282A39] text-center">
        We are Located At
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto hide-scrollbar scroll-smooth"
      >
        {contacts.map((contact, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-80 rounded-3xl border border-gray-300 p-6 shadow-md  "
          >
            <div className="flex justify-center mb-4 mt-10  ">
              <div className="bg-gray-200 mt-10 w-28 h-28 swing rounded-full items-center flex justify-center absolute -top-16 z-10">
                <img
                  src={`/imgs/home/${contact.image}`}
                  alt={contact.country}
                  className="w-20 h-20 rounded-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              {contact.country}
            </h3>
            <p className="text-sm text-center mb-1">{contact.email}</p>
            <p className="text-sm text-center mb-1">{contact.phone}</p>
            <div className="text-sm text-center text-gray-600">
              {contact.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-8 mt-8">
        <button
          onClick={() => scroll("left")}
          className="bg-white border border-gray-300 rounded-full p-4 shadow-md hover:bg-orange-600"
          aria-label="Scroll Left"
        >
          <FaArrowLeft className="text-black h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white border border-gray-300 rounded-full p-4 shadow-md hover:bg-orange-600"
          aria-label="Scroll Right"
        >
          <FaArrowRight className="text-black h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
