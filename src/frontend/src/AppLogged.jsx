import { Outlet } from "react-router-dom";
import StandardHeader from "./components/layouts/Headers/StandardHeader";
import PlayerOff from "./components/layouts/footers/PlayerOff";


const AppLogged = () => {
  return (
    <div className="bg-zinc-700 h-dvh">
      <StandardHeader />
      <Outlet />
      <PlayerOff />
    </div>
  );
};

export default AppLogged;
