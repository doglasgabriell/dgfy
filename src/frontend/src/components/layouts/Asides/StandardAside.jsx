import { Library, PanelLeftOpen, Plus } from "lucide-react";
import { useState } from "react";
import PlaylistTeste from "../../../data/PlaylistTeste";
import PlaylistLittleCard from "./PlaylistLittleCard";

const StandardAside = () => {
  // Extender janela playlist aside
  //   const [windowPlaylist, setWindowPlaylist] = useState(false);
  //   const openPlaylist = () => setWindowPlaylist(!windowPlaylist);

  // Alterar btn ao hover do aside playlist
  const [iconPlaylist, setIconPlaylist] = useState(true);
  const toggleIconPlaylistFalse = () => setIconPlaylist(false);
  const toggleIconPlaylistTrue = () => setIconPlaylist(true);

  return (
    <aside className="w-20 h-full bg-zinc-900 rounded-md py-5 px-1.5 flex flex-col gap-3">
      <div className="w-full flex flex-col justify-center items-center gap-4 p-2">
        <button
          className="cursor-pointer"
          type="button"
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

      <div className="max-h-full overflow-y-scroll" >
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
