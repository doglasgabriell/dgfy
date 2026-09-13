import { BsSpotify } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";

const SignUpHeader = () => {
  const menu = [
    {
      id: 1,
      label: "Inscrever-se",
      style: false,
    },
    {
      id: 2,
      label: "Entrar",
      style: true,
    },
  ];

  return (
    <header className="flex h-18 bg-zinc-950 items-center p-2">
      <div className="w-1/3 p-4">
        <BsSpotify color="red" size={40} />
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
        <nav className="flex text-white justify-end gap-8">
          {menu.map((items) => (
            <button
              className="font-bold cursor-pointer hover:scale-110 transition-all"
              key={items.id}
              style={{
                background: items.style ? "white" : "black",
                color: items.style ? "black" : "white",
                padding: items.style ? "10px 30px" : "0",
                borderRadius: items.style ? "50px" : "0",
                fontFamily: items.style ? "arial" : "arial",
                opacity: items.style ? "100%" : "70%",
              }}
            >
              {items.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SignUpHeader;
