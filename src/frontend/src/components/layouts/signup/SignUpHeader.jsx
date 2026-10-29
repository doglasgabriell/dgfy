import { BsSpotify } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUpHeader = () => {
  return (
    <header className="flex h-18 bg-zinc-950 items-center p-2">
      <div className="w-1/3 p-4">
        <BsSpotify className="text-orange-500" size={40} />
      </div>

      <div className="w-1/3 flex items-center justify-center gap-4">
        <button className="bg-zinc-800 p-3 rounded-full items-center justify-center hover:scale-105 transition-all cursor-pointer">
          <IoHomeSharp color="white" size={30} />
        </button>
        <input
          type="text"
          className="bg-zinc-800 p-3 text-white placeholder:font-bold rounded-full w-full focus:outline-3 focus:outline-red-700"
          placeholder="O que você deseja ouvir?"
        />
      </div>

      <div className="w-1/3">
        <nav className="flex text-white justify-end gap-8 items-center">
          <Link to="/register">
            <button className="text-white font-bold opacity-70 hover:opacity-100 transition-all cursor-pointer">
              Inscrever-se
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-orange-500 px-4 py-2 rounded-full font-bold hover:bg-red-500 transition-all cursor-pointer">
              Entrar
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SignUpHeader;
