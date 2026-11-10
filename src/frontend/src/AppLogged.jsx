import { Outlet } from "react-router-dom";
import StandardHeader from "./components/layouts/Headers/StandardHeader";
import PlayerOff from "./components/layouts/Footers/PlayerOff";

const AppLogged = () => {
  return (
    <div className="h-screen flex flex-col relative bg-zinc-950">
      <StandardHeader />
      <div className="flex flex-col w-full h-full p-3">
        <main className="flex h-4/5">
          <Outlet />
        </main>
      </div>
      {/* Fazer verificacao caso o usuario n clicar na musica o player fica desligado */}
      <PlayerOff />
    </div>
  );
};

export default AppLogged;
