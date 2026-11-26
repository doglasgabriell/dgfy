import { CirclePlus, Maximize2 } from "lucide-react";
import ZoroWallpaper from "../../assets/gif/zoro-monochrome-one-piece-moewalls-com.mp4";
import ImagemTeste from "../../assets/coverArtists/Doglas & lavinia.png"

const SongView = () => {
  return (
    <div className="h-screen min-w-0 flex flex-col items-center relative p-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      >
        <source src={ZoroWallpaper} className="rounded-xl" type="video/mp4" />
      </video>

      <div className="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-lg rounded-xl"></div>

      <div className="scale-0 hover:scale-100 w-full h-[10%] flex justify-between z-50">
        <span className="text-white font-bold">{"NOME MÚSICA"}</span>
        <div className="flex gap-5">
          <CirclePlus className="text-zinc-100/40 hover:text-white transition-all cursor-pointer" />
          <Maximize2 className="text-zinc-100/40 hover:text-white transition-all cursor-pointer" />
        </div>
      </div>

      <div className="w-full h-[90%] absolute  z-50 flex items-center justify-center">
        <div className="h-[90%] w-1/3 bg-cover bg-center rounded-xl shadow-xl/30"  style={{backgroundImage: `url(${ImagemTeste})`}}>

        </div>
      </div>
    </div>
  );
};

export default SongView;
