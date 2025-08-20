import { events } from "../../utils/data";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export const UpcomingEvents = () => {
  return (
    <div className="bg-gradient-to-r from-[#AC343F] to-[#171617] py-10 px-4 md:px-16 text-white flex flex-col gap-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Upcoming Events & Exhibitions
      </h2>

      <div className="flex flex-col gap-8 md:gap-12">
        {events?.map((eventUp, eventIdx) => (
          <div
            key={eventIdx}
            className="bg-white text-black rounded-xl shadow-sm shadow-gray-100 flex flex-col md:flex-row items-center justify-between px-4 py-6 md:py-8 md:px-8 gap-4"
          >
            <div className="flex-1 w-24 h-24 ">
              <img
                src={eventUp.logo}
                alt="logo"
                className="w-full h-full object-contain "
              />
            </div>
            <div className="flex-3 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold">
                {eventUp.name}
              </h3>
              <p className="text-sm text-gray-700 flex item-center justify-center md:justify-start gap-2 mt-1">
                <FaMapMarkerAlt className="text-orange-600" />
                {eventUp.venue}
              </p>
            </div>
            <div className="flex-2 flex-col items-center md:items-start gap-2 ">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-orange-600" />
                <span>{eventUp.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-orange-600" />
                <span>{eventUp.time}</span>
              </div>
            </div>
            <div className="flex-1 flex-col items-center gap-2">
              <img src={eventUp.badge} alt="" className="w-8 h-8" />
              <span>{eventUp.country}</span>
            </div>
            <button className="bg-gradient-to-r from-[#E34231] to-[#F28247] p-4 bg-orang text-white rounded-full hover:cursor-pointer ">
              View More
            </button>
          </div>
        ))}
      </div>
      <button className="bg-gradient-to-r from-[#E34231] to-[#F28247] p-4 bg-orang text-white rounded-full hover:cursor-pointer md:w-[30%] md:my-2 md:mx-auto md:text-[20px]  ">
        View More Events
      </button>
    </div>
  );
};
