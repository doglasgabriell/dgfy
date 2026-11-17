import { Library, PanelLeftOpen, Plus } from "lucide-react";
import { useState } from "react";
import PlaylistTeste from "../../../data/PlaylistTeste";
import PlaylistLittleCard from "./PlaylistLittleCard";
import LibraryExpanded from "../../LibraryExpanded";
import { PanelLeftClose } from "lucide-react";

const StandardAside = () => {
  // Extender janela playlist aside
  const [windowPlaylist, setWindowPlaylist] = useState(false);
  const openPlaylist = () => setWindowPlaylist(!windowPlaylist);

  // Alterar btn ao hover do aside playlist
  const [iconPlaylist, setIconPlaylist] = useState(true);
  const toggleIconPlaylistFalse = () => setIconPlaylist(false);
  const toggleIconPlaylistTrue = () => setIconPlaylist(true);

  return windowPlaylist ? (
    <aside className="flex flex-col p-5 w-80 bg-linear-to-b from-zinc-800 to-zinc-950 gap-6 rounded-lg">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2 items-center">
          <button
            className="cursor-pointer"
            type="button"
            onClick={openPlaylist}
          >
            <PanelLeftClose
              className="text-orange-500 hover:scale-110 transition-all "
              size={30}
            />
          </button>

          <span className="text-zinc-300 font-bold">Your library</span>
        </div>

        <div>
          <div className="w-max h-max cursor-pointer bg-zinc-600/60 flex items-center justify-center rounded-full group/addition hover:bg-zinc-600 transition-all">
            <Plus
              className="text-orange-500/60 group-hover/addition:text-orange-500 transition-all p-1"
              size={30}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="bg-zinc-700/70 px-2 rounded-full py-0.5 text-white font-bold cursor-pointer hover:bg-zinc-700 transition-all">
          Playlists
        </button>
        <button className="bg-zinc-700/70 px-2 rounded-full py-0.5 text-white font-bold cursor-pointer hover:bg-zinc-700 transition-all">
          Artists
        </button>
      </div>

      <div className="w-full flex flex-col overflow-y-scroll ">
        {PlaylistTeste.map((p) => (
          <LibraryExpanded
            key={p.id}
            image={p.pic_url}
            name={p.name}
            type={p.type}
            description={p.description}
          />
        ))}
      </div>
    </aside>
  ) : (
    <aside className="flex flex-col p-1 w-20 bg-linear-to-b from-zinc-800 to-zinc-950 gap-4 rounded-lg">
      {/* shadow-[0px_10px_7px_0px_rgb(0_0_255/0.2)] --> Usar para adicionar na div abaixo futuramente */}
      <div className="w-full flex flex-col justify-center items-center gap-4 p-2">
        <button
          className="cursor-pointer"
          type="button"
          onClick={openPlaylist}
          onMouseOver={toggleIconPlaylistFalse}
          onMouseOut={toggleIconPlaylistTrue}
        >
          {iconPlaylist ? (
            <Library className="text-orange-500" size={30} />
          ) : (
            <PanelLeftOpen className="text-orange-500" size={30} />
          )}
        </button>

        <div className="w-max h-max cursor-pointer bg-zinc-600/60 flex items-center justify-center rounded-full group/addition hover:bg-zinc-600 transition-all">
          <Plus
            className="text-orange-500/60 group-hover/addition:text-orange-500 transition-all p-1"
            size={30}
          />
        </div>
      </div>

      <div className="max-h-full overflow-y-scroll">
        {PlaylistTeste.map((playlist) => (
          <PlaylistLittleCard
            key={playlist.id}
            description={playlist.name}
            image={playlist.pic_url}
          />
        ))}
      </div>
    </aside>
  );
};

export default StandardAside;
