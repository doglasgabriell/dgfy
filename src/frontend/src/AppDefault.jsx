import { Outlet } from "react-router-dom";
import PlayerOff from "./components/layouts/Footers/PlayerOff";
import StandardHeader from "./components/layouts/Headers/StandardHeader";
import StandardAside from "./components/layouts/Asides/StandardAside";
import AsideDetailsSong from "./components/layouts/Asides/AsideDetailsSong";

import ImageTeste from "./assets/coverArtists/Doglas & lavinia.png"

const AppDefault = () => {
  return (
    <div className="h-screen flex flex-col bg-zinc-950">
      <StandardHeader />
      <div className="w-full min-h-0 px-3 py-4.5 flex">
        <StandardAside />
        <main className="flex flex-1 flex-col min-h-0 px-2 overflow-y-auto bg-linear-to-b bg-zinc-950 rounded-lg">
          <Outlet />
        </main>

        <AsideDetailsSong image={ImageTeste} nameSong={"Doglas"} nameAutor={"Doglinhas"} namePlaylist={"TIK TOK 2025"} />
      </div>

      {/* Fazer verificacao caso o usuario n clicar na musica o player fica desligado */}
      <PlayerOff />
    </div>
  );
};

export default AppDefault;
