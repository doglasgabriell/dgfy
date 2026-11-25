import {
  ChevronLeft,
  CirclePlus,
  Maximize2,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";
import NexCard from "../Card/NexCard";
import NextSong from "../../../data/NextSong";
import { FcLike } from "react-icons/fc";
const AsideDetailsSong = ({
  image,
  namePlaylist,
  nameSong,
  nameAutor,
}) => {
  const [openAside, setOpenAside] = useState(false);
  const toggle = () => setOpenAside(!openAside);

  const [ liked, setLiked ] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return openAside ? (
    // Aside completo
    <div className="min-w-0 w-[20%] h-full group/textclip rounded-md group/arrowActive bg-linear-to-b from-zinc-900 to-zinc-950 p-4 flex flex-col  transition-all duration-300">
      {/* TITULO SUPERIOR COM 5% ASIDE PRINCIPAL */}
      <div className="flex gap-3 w-full h-[5%] items-center justify-around mb-4">
        <PanelLeftOpen
          onClick={toggle}
          className="w-0 text-white/60 group-hover/textclip:w-[10%] transition-all duration-200 hover:text-white cursor-pointer"
        />
        <span className="w-full cursor-pointer group-hover/textclip:w-[80%] font-bold truncate text-clip text-white hover:underline decoration-2 underline-offset-2">
          {namePlaylist}
        </span>
        <Maximize2 className="w-0 cursor-pointer group-hover/textclip:w-[10%] text-white/60 transition-all duration-200 hover:text-white hover:scale-105" />
      </div>

      {/* IMAGEM OCUPANDO 50% ASIDE PRINCIPAL */}
      <div
        className={`w-full h-[50%] bg-cover bg-center object-cover cursor-pointer rounded-lg mb-3`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* INFORMACOES DA MUSICA OCUPANDO 10%  ASIDE PRINCIPAL*/}
      <div className="flex justify-between h-[10%] items-center mb-4">
        <div className="flex flex-col">
          <span className="text-white cursor-pointer font-bold text-2xl hover:underline">
            {nameSong}
          </span>
          <span className="text-white/60 hover:underline cursor-pointer decoration-white">
            {nameAutor}
          </span>
        </div>

        <button onClick={toggleLike}>
          {liked ? (
            <FcLike className="cursor-pointer hover:scale-105 transition-all size-6" />
          ) : (
            <CirclePlus className="text-white/60 cursor-pointer hover:text-white hover:scale-105 transition-all" />
          )}
        </button>
      </div>

      {/* SECTION A SEGUIR OCUPANDO 35% DO ASIDE PRINCIPAL PEGANDO O RESTANTE E TOTALIZANDO OS 100% DO ASIDE*/}
      <div className="flex flex-col p-4 gap-2 bg-white/10 w-full min-w-0 h-auto rounded-xl ">
        <div className="w-full h-[10%] flex">
          <span className="text-white font-bold">Next in queue</span>
        </div>

        <div className="flex flex-col justify-center h-full w-full">
          {NextSong.map((n) => (
            <NexCard
              key={n.id}
              cover={n.cover}
              name={n.title}
              description={n.description}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div
      onClick={toggle}
      className="min-w-0 w-[3%] rounded-md group/arrowActive cursor-pointer bg-linear-to-b from-zinc-900 to-zinc-950 flex justify-center items-center p-2 transition-all duration-200"
    >
      <ChevronLeft className="text-white/40 group-hover/arrowActive:text-white transition duration-200" />
    </div>
  );
};

export default AsideDetailsSong;
