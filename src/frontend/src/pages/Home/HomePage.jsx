import StandardAside from "../../components/layouts/Asides/StandardAside";
import RecentsHome from "../../components/layouts/Card/RecentsHome";
import RecentsHomeApi from "../../data/RecentsHomeApi";

const HomePage = () => {
  return (
    <div className="w-full h-full flex gap-2">
      <StandardAside />
      <div className="w-full h-full px-8 py-3 rounded-md flex flex-col gap-6  bg-linear-to-b from-zinc-800 to-zinc-950">
        <div className="flex gap-3 w-full items-center">
          <button className="bg-white/10 backdrop-blur-lg rounded-full border border-white/10 text-zinc-100 px-3 py-1.5  cursor-pointer hover:scale-110 hover:bg-white/15  transition-all">
            Tudo
          </button>
          <button className="bg-white/10 backdrop-blur-lg rounded-full border border-white/10 text-zinc-100 px-3 py-1.5 cursor-pointer hover:scale-110 hover:bg-white/15 transition-all ">
            Músicas
          </button>
          <button className="bg-white/10 backdrop-blur-lg rounded-full border border-white/10 text-zinc-100 px-3 py-1.5 cursor-pointer hover:scale-110 hover:bg-white/15 transition-all ">
            Podcasts
          </button>
          <button className="bg-white/10 backdrop-blur-lg rounded-full border border-white/10 text-zinc-100 px-3 py-1.5 cursor-pointer hover:scale-110 hover:bg-white/15 transition-all ">
            Albuns
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3 grid-rows-[55px_55px]">
          {
            RecentsHomeApi.map((r) => (
              <RecentsHome 
                key={r.id}
                image={r.cover}
                title={r.name}
                description={r.type}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;
