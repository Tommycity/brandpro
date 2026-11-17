import React, { useEffect, useRef, useState } from "react";
import { brandEverywhereData } from "../../utils/data";

export const BrandEverywhere = () => {
  const [selectedService, setSelectedService] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selectedService) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedService(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <div className="p-5 md:p-20 lg:p-5 bg-black flex flex-col gap-14">
      <div className="text-center flex flex-col gap-6">
        <h1 className="text-[#282a39] text-3xl lg:text-5xl font-bold">
          We take your brand everywhere
        </h1>
        <p className="text-lg">
          Equipped with latest industry technologies, utilized by the brightest
          of minds; here's a list of our most prominent services.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        {brandEverywhereData?.map((item, i) => (
          <div key={i} className="flex w-full flex-col gap-3">
            <div className="group overflow-hidden lg:h-[400px]">
              <img
                src={`/imgs/new-images/${item.image}`}
                alt=""
                className="group-hover:scale-110 transition-transform ease-in-out duration-500 h-full  w-full"
              />
            </div>
            <span className="font-bold text-xl">{item.title}</span>
            <button
              type="button"
              onClick={() => setSelectedService(item)}
              className="bg-white w-fit text-black app-btn-white-bg hover:text-white rounded-full py-3 px-7"
            >
              Click To Explore services
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedService(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-gallery-title"
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-6 text-black shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h2 id="service-gallery-title" className="text-2xl font-bold md:text-3xl">
                {selectedService.title}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close service gallery"
                className="rounded-full px-3 py-1 text-3xl leading-none hover:bg-gray-100"
              >
                &times;
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedService.galleryImages.map((image) => (
                <img
                  key={image}
                  src={`/imgs/${selectedService.galleryFolder}/${encodeURIComponent(image.trim())}`}
                  alt={`${selectedService.title} project`}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
