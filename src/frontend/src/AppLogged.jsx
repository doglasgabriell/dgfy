import { Outlet } from "react-router-dom";
import StandardHeader from "./components/layouts/Headers/StandardHeader";
import PlayerOff from "./components/layouts/Footers/PlayerOff";

const AppLogged = () => {
  return (
    <div className="h-screen flex flex-col bg-zinc-950">
      <StandardHeader />

      <main className="flex flex-1 flex-col p-3 h-full overflow-y-auto bg-linear-to-b bg-zinc-950 rounded-lg ">
        <Outlet />
      </main>

      {/* Fazer verificacao caso o usuario n clicar na musica o player fica desligado */}
      <PlayerOff />
    </div>
  );
};

export default AppLogged;
