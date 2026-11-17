import StandardAside from "../../components/layouts/Asides/StandardAside";

const HomePage = () => {
  return (
    <div className="w-full h-full flex gap-2">
      <StandardAside />
      <div className="w-full h-full px-8 py-3 rounded-md bg-linear-to-b from-zinc-800 to-zinc-950">
        <div className="flex gap-3 w-full items-center">
          <button className="bg-zinc-950/50 rounded-full text-zinc-100 font-bold px-3 py-1.5  cursor-pointer hover:scale-110 transition-all">
            Tudo
          </button>
          <button className="bg-zinc-950/50 rounded-full text-zinc-100 font-bold px-3 py-1.5 cursor-pointer hover:scale-110 transition-all ">
            Músicas
          </button>
          <button className="bg-zinc-950/50 rounded-full text-zinc-100 font-bold px-3 py-1.5 cursor-pointer hover:scale-110 transition-all ">
            Podcasts
          </button>
          <button className="bg-zinc-950/50 rounded-full text-zinc-100 font-bold px-3 py-1.5 cursor-pointer hover:scale-110 transition-all ">
            Albuns
          </button>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 w-full ">
           

        </div>
      </div>
    </div>
  );
};

export default HomePage;
