import { aboutPageTeamSection } from "../../utils/data";
export const TeamPage = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 w-full">
      <h1 className="font-bold text-5xl mb-6">Our Team</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center md:gap-4 gap-8 lg:gap-8">
        {aboutPageTeamSection?.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="overflow-hidden group">
              <img
                src={`/imgs/home/${item.image}`}
                alt=""
                className="group-hover:scale-120 transition-all duration-700"
              />
            </div>
            <h1 className="font-bold text-2xl">{item.title}</h1>
            <span className="text-[15px]">{item.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
