const Cardsignup = () => {
  return (
    <div className="flex justify-center items-center h-100 w-150 bg-linear-to-b from-red-600 to-red-950 fixed z-50 left-170 top-55 shadow-xl/30 rounded-xl">
      <div className="flex gap-10 p-10 h-100 items-center">
        <div className="w-100">
          <img
            src="../../../src/assets/logoSpotifyVermelha.png"
            alt="Logo do spotify vermelha"
            className="w-full h-auto rounded-xl shadow-xl/30"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold text-center text-white">
            Escute com uma conta gratuíta no dgfy
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-white p-3 rounded-full text-red-700 font-bold hover:scale-110 transition-all cursor-pointer">
              Inscreva-se grátis
            </button>
            <button className="bg-zinc-600/0 p-3 rounded-full text-white font-bold border-2 border-white hover:shadow-xl hover:border-4 transition-all cursor-pointer">
              {" "}
              Baixe o app
            </button>
            <span className="text-white/70 font-bold cursor-pointer">Fechar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsignup;
