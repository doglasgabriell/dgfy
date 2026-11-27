import { CirclePlus, Minimize2 } from "lucide-react";
import ZoroWallpaper from "../../assets/gif/zoro-monochrome-one-piece-moewalls-com.mp4";
import ImagemTeste from "../../assets/coverArtists/Doglas & lavinia.png";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";

const SongView = () => {
  const [checkPlaylist, setCheckPlaylist] = useState(false);
  const checkFn = () => {
    const checkedIsTrue = !checkPlaylist;
    setCheckPlaylist(checkedIsTrue);
    if (checkedIsTrue) {
      return toast.success("Adicionado a playlist", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.warn("Removido da playlist", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

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

      <div className=" w-full h-[10%] flex justify-between z-10">
        <span className="text-white font-bold">{"NOME MÚSICA"}</span>
        <div className="flex  gap-5">
          <span onClick={checkFn}>
            {checkPlaylist ? (
              <FaCheckCircle
                className="text-green-600 transition-all cursor-pointer"
                size={25}
              />
            ) : (
              <CirclePlus className="text-zinc-100/40 hover:text-white transition-all cursor-pointer" />
            )}
          </span>
          <Minimize2 className="text-zinc-100/40 hover:text-white transition-all cursor-pointer" />
        </div>
      </div>

      <div className="w-full h-[90%] absolute  flex items-center justify-center">
        <div
          // COLOCAR UM ANIMATE PULSE AQUI, CASO A MUSICA ESTEJA PARADA, A ANIMACAO PARA, QUANDO A MUSICA COMECAR A RODAR, A ANIMACAO RODA
          className="h-[90%] w-1/3 bg-cover bg-center rounded-xl shadow-xl/30 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          style={{ backgroundImage: `url(${ImagemTeste})` }}
        ></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SongView;
