import { ArrowButton } from "../../components/globals/ArrowButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogs } from "../../utils/data";
import { useCarousel } from "../../hooks/useCarousel";

export const BlogToRead = () => {
  const { current, goTo, prev, next, canPrev, canNext } = useCarousel(
    blogs.length,
    3500   // auto-advances every 3.5 s — pass 0 to disable
  );

  return (
    <section aria-label="Blogs to read" className="w-full overflow-hidden">

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-10 mb-6 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#282A39]">
          Blogs to Read
        </h2>
        <ArrowButton title="VIEW MORE" />
      </div>

      {/* ── Slide track ── */}
      <div className="overflow-hidden px-4">
        <div
          className="flex transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="shrink-0 px-2 w-full sm:w-1/2 lg:w-1/3"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 h-full">
                <div className="overflow-hidden aspect-[4/3] group">
                  <img
                    src={`/imgs/new-images/${blog.image}`}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#282A39] mb-3 line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  <Link to={blog.link}>
                    <ArrowButton title="Learn More" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-between mt-5 px-4">

        {/* Dots */}
        <div role="tablist" aria-label="Carousel position" className="flex gap-2 items-center">
          {blogs.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
              onClick={() => goTo(i)}
              className={[
                "h-[6px] rounded-full border-none transition-all duration-200 cursor-pointer",
                i === current
                  ? "w-5 bg-[#282A39]"
                  : "w-[6px] bg-black/20 hover:bg-black/40",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Arrows — hidden on mobile */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous blog"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#282A39] text-white shadow hover:bg-gradient-to-r hover:from-[#E34231] hover:to-[#F28247] disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <FaArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            aria-label="Next blog"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#282A39] text-white shadow hover:bg-gradient-to-r hover:from-[#E34231] hover:to-[#F28247] disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
};



