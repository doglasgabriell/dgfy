import { Link } from "react-router-dom";

const Cardsignup = ({ hiddenCard }) => {
  return (
    // Fundo de trás preenchendo tudo com blur
    <div className="w-dvw h-dvh absolute  flex justify-center items-center bg-zinc-700/50 z-10 backdrop-blur-sm">
      <div className="flex justify-center  bg-[url(https://i.redd.it/k793lw4omo2h1.gif)] bg-cover items-center h-100 w-150 shadow-xl/30 rounded-xl">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-xl">
          <div className="flex gap-10 p-10 h-100 items-center">
            <div className="w-100">
              <img
                src="/src/assets/coverArtists/Doglas & lavinia.png"
                alt="Logo do spotify vermelha"
                className="w-full h-auto rounded-xl shadow-xl/30"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-bold text-center text-white">
                Escute com uma conta gratuíta no dgfy
              </p>
              <div className="flex flex-col items-center gap-4">
                <Link to="/login">
                  <button className="bg-white p-3 rounded-full text-orange-500 font-bold hover:scale-110 transition-all cursor-pointer">
                    Free Sign up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-black/40 p-3 rounded-full text-white font-bold border-2 border-white hover:shadow-xl hover:border-4 transition-all cursor-pointer">
                    {" "}
                    Sign in
                  </button>
                </Link>
                <span
                  onClick={hiddenCard}
                  className="text-white/70 font-bold cursor-pointer hover:text-zinc-100 transition-all"
                >
                  Close
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsignup;
