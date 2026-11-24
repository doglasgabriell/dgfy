import AsideDetailsSong from "../../components/layouts/Asides/AsideDetailsSong";
import StandardAside from "../../components/layouts/Asides/StandardAside";
import RecentsHome from "../../components/layouts/Card/RecentsHome";
import MediaSection from "../../components/layouts/Section/MediaSection";
import RecentsHomeApi from "../../data/RecentsHomeApi";
import ImageTeste from "../../assets/coverArtists/Doglas & lavinia.png"

const HomePage = () => {
  return (
    <div className="relative w-full min-w-0 h-full flex gap-2">
      <StandardAside />
      <div className="h-full min-w-0 px-8 py-3 rounded-md flex flex-1 flex-col gap-6  bg-linear-to-b from-zinc-800 to-zinc-950 overflow-y-auto">
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

        <div className="grid grid-cols-4 gap-3 grid-rows-[75px_75px]">
          {RecentsHomeApi.map((r) => (
            <RecentsHome
              key={r.id}
              image={r.cover}
              title={r.name}
              description={r.type}
            />
          ))}
        </div>

        <div className="flex flex-col max-w-full gap-10">
          <MediaSection title={"Suas músicas abaixadas"} />
          <MediaSection title={"Audio livros para você"} />
          <MediaSection title={"Músicas"} />
          <MediaSection title={"Podcasts"} />
        </div>
      </div>

      {/* dados estaticos */}
      <AsideDetailsSong namePlaylist={"TIK TOK MELHORES DO DOGLAS GOSTOSO"} image={ImageTeste} nameAutor={"HG NO BEAT"} nameSong={"Chapolin"} imgNext={ImageTeste} autorSongNext={"Autor Teste"} titleSongNext={"Titulo de Teste"}/>
    </div>
  );
};

export default HomePage;
