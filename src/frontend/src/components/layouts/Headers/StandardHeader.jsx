// Import Logo
import LogoLaranja from "../../../assets/icon/LogoLaranja.png";

// Import Icons
import { Moon, Search } from "lucide-react";
import { House } from "lucide-react";
import { Sun } from "lucide-react";
import { CircleUser } from "lucide-react";

// Import Hooks
import { useState } from "react";

const StandardHeader = () => {
  // DARK MODE AND LIGHT MODE
  const [darkMode, setDarkMode] = useState(false);
  const switchToDarkMode = () => setDarkMode(!darkMode);

  // HANDLE PERFIL
  const [tapProfile, setTapProfile] = useState(false);
  const tapUserProfile = () => setTapProfile(!tapProfile);

  return (
    <div className="bg-zinc-950 h-16 p-2 w-full flex">
      {/* Icon Page */}
      <div className="w-1/3 h-full">
        <img
          src={LogoLaranja}
          alt="Logo DGFY Laranja"
          className="h-12 cursor-pointer"
        />
      </div>
      {/* Search */}
      <div className="w-1/3 h-full flex items-center gap-3">
        <div className="bg-zinc-800 p-2 rounded-full hover:scale-105 hover:bg-zinc-600 transition-all cursor-pointer">
          <House className="text-orange-500" size={30} />
        </div>
        <div className="w-full relative">
          <Search className="absolute bottom-3 left-2 text-zinc-400/80" />
          <input
            className="bg-zinc-800 p-3 px-10 text-white placeholder:font-bold rounded-full w-full focus:outline-3 focus:outline-orange-500 hover:bg-zinc-700 transition-colors"
            type="text"
            placeholder="O que você quer ouvir?"
          />
        </div>
      </div>
      {/* Menu */}
      <div className="w-1/3 flex h-full px-4 items-center justify-end gap-5">
        <a
          href="https://github.com/doglasgabriell"
          target="_blank"
          type="button"
          className="text-zinc-400 font-bold hover:text-zinc-300 cursor-pointer transition-all"
        >
          Git Hub do Gabriell
        </a>
        <button className="cursor-pointer" onClick={switchToDarkMode}>
          {darkMode ? (
            <Moon
              className="cursor-pointer hover:scale-110 transition-all"
              color="white"
            />
          ) : (
            <Sun className="cursor-pointer hover:scale-110 text-orange-500 transition-all" />
          )}
        </button>
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <CircleUser
              onClick={tapUserProfile}
              className="hover:scale-110 transition-all text-orange-500 cursor-pointer"
              size={35}
            />
            {tapProfile && (
              <div className="absolute w-80 p-1 top-12.5 -right-5.5 flex flex-col bg-[#282828] rounded-sm">
                <div className="h-8 px-2 w-full flex items-center hover:bg-zinc-700 hover:rounded-sm transition-all cursor-pointer">
                  <span className=" text-white font-bold">Perfil</span>
                </div>
                <div className="h-8 px-2 w-full flex items-center hover:bg-zinc-700 hover:rounded-sm transition-all cursor-pointer">
                  <span className=" text-white font-bold">Sair</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardHeader;
