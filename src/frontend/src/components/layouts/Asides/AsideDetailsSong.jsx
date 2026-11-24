import {
  ChevronLeft,
  CirclePlus,
  Maximize2,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";
const AsideDetailsSong = ({
  image,
  year,
  namePlaylist,
  nameSong,
  description,
  nameAutor,
  imgNext,
  descriptionNext,
  autorSongNext,
  titleSongNext
}) => {
  const [openAside, setOpenAside] = useState(false);
  const toggle = () => setOpenAside(!openAside);

  return openAside ? (
    <div className="min-w-0 w-[20%] group/textclip rounded-md group/arrowActive cursor-pointer bg-linear-to-b from-zinc-900 to-zinc-950 p-4 flex flex-col  transition-all duration-200">
      <div className="flex gap-3 w-full h-[5%] items-center justify-around mb-4">
        <PanelLeftOpen
          onClick={toggle}
          className="w-0 text-white/60 group-hover/textclip:w-[10%] transition-all duration-200 hover:text-white"
        />
        <span className="w-full group-hover/textclip:w-[80%] font-bold truncate text-clip text-white hover:underline decoration-2 underline-offset-2">
          {namePlaylist}
        </span>
        <Maximize2 className="w-0 group-hover/textclip:w-[10%] text-white/60 transition-all duration-200 hover:text-white hover:scale-105" />
      </div>

      <div
        className={`w-full h-[50%] bg-cover bg-center rounded-lg mb-3`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="text-white font-bold text-2xl hover:underline">
            {nameSong}
          </span>
          <span className="text-white/60 hover:underline decoration-white">
            {nameAutor}
          </span>
        </div>

        <CirclePlus className="text-white/60 hover:text-white hover:scale-105 transition-all" />
      </div>

      {/* SECTION A SEGUIR */}
      <div className="flex flex-col p-5 bg-white/10 w-full h-[30%] rounded-xl ">
        <div className="w-full h-[5%] mb-4">
          <span className="text-white font-bold ">A seguir</span>
        </div>

        <div className="flex flex-col h-[25%] w-full">
          <div className="w-full h-[30%] flex gap-3 ">
            <img className="rounded-sm" src={imgNext} alt={descriptionNext} />
            <div className="flex flex-col justify-center">
              <span className="text-white">{titleSongNext}</span>
              <span className="text-white/60">{autorSongNext}</span>
            </div>
          </div>
          <div className="w-full h-[30%] flex gap-3 ">
            <img className="rounded-sm" src={imgNext} alt={descriptionNext} />
            <div className="flex flex-col justify-center">
              <span className="text-white">{titleSongNext}</span>
              <span className="text-white/60">{autorSongNext}</span>
            </div>
          </div>
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
