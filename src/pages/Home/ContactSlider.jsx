import { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { contacts } from "../../utils/data";
import { useCarousel } from "../../hooks/useCarousel";

export const ContactSlider = () => {
  const { current, goTo, prev, next, canPrev, canNext } = useCarousel(
    contacts.length,
    4000, 
  );

  return (
    <div className="px-8 pb-8 py-20">
      <h2 className="text-4xl font-bold mb-18 text-[#282A39] text-center">
        We are Located At
      </h2>

      <div
        className="flex gap-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${current * 108}%)` }}
      >
        {contacts.map((contact, i) => (
          <div
            key={i}
            className="shrink-0 px-2 w-full sm:w-1/3 lg:w-1/5 rounded-3xl border border-gray-300 p-6 shadow-md  "
          >
            <div className="flex justify-center mb-4 mt-10  ">
              <div className="bg-gray-200 mt-10 w-28 h-28 swing rounded-full items-center flex justify-center absolute -top-16 z-100">
                <img
                  src={`/imgs/new-images/${contact.image}`}
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
          onClick={prev}
          disabled={!canPrev}
          className="bg-white border border-gray-300 rounded-full p-4 shadow-md hover:bg-orange-600"
          aria-label="Scroll Left"
        >
          <FaArrowLeft className="text-black h-5 w-5" />
        </button>
        <button
          onClick={next}
          disabled={!canNext}
          className="bg-white border border-gray-300 rounded-full p-4 shadow-md hover:bg-orange-600"
          aria-label="Scroll Right"
        >
          <FaArrowRight className="text-black h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
