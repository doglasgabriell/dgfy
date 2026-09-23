import { useState } from "react";
import Artists from "./components/Artists";
import FooterSignup from "./components/layouts/footers/FooterSignup";
import SignUpHeader from "./components/layouts/signup/SignUpHeader";
import SingUpAside from "./components/layouts/signup/SingUpAside";
import Songs from "./components/Songs";
import artistsAPI from "./data/artistsAPI";
import songsAPI from "./data/songsAPI";
import Cardsignup from "./components/cards/Cardsignup";

function App() {
  // Use state + funcao para setar o card de se inscrever
  const [cardsign, setCardsign] = useState(false);
  function showCardSign() {
    setCardsign(!cardsign);
  }

  return (
    <>
      {/* Adiciona card na tela se usuário clicar em algum botão antes de se inscrever */}
      {cardsign && (
        <Cardsignup />
      )}
      <div className="h-screen flex flex-col bg-zinc-950 p-2">
        <SignUpHeader />
        <div className="flex flex-1 gap-2">
          <SingUpAside />
          <main className="flex flex-1 flex-col p-10 overflow-auto bg-linear-to-b from-zinc-800 to-zinc-950 rounded-lg">
            <div className="flex justify-between text-white items-center mb-5">
              <h2 className="text-2xl font-bold cursor-pointer hover:underline transition-all">
                Músicas em alta
              </h2>
              <span
                onClick={showCardSign}
                className="font-bold opacity-50 cursor-pointer hover:underline transition-all"
              >
                Mostrar tudo
              </span>
            </div>
            <div className="flex gap-5 overflow-y-auto overflow-hidden mb-5">
              {songsAPI.map((song) => (
                <Songs
                  key={song.id}
                  title={song.title}
                  cover={song.cover}
                  description={song.description}
                />
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-white items-center mb-5">
                <h2 className="text-2xl font-bold cursor-pointer hover:underline transition-all">
                  Artistas Populares
                </h2>
                <span
                  onClick={showCardSign}
                  className="font-bold opacity-50 cursor-pointer hover:underline transition-all"
                >
                  Mostrar tudo
                </span>
              </div>
              <div className="flex gap-5 h-auto overflow-y-auto overflow-hidden">
                {artistsAPI.map((artist) => (
                  <Artists
                    key={artist.id}
                    cover={artist.cover}
                    name={artist.name}
                    type={artist.type}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
        <FooterSignup />
      </div>
    </>
  );
}

export default App;
