import { useEffect, useState } from "react";
import FooterSignup from "./components/layouts/Footers/FooterSignup";
import SignUpHeader from "./components/layouts/Headers/SignUpHeader";
import SingUpAside from "./components/layouts/Asides/SingUpAside";
import Cardsignup from "./components/layouts/Card/Cardsignup";
import Artists from "./components/Artists";
import Songs from "./components/Songs";
import artistsAPI from "./data/artistsAPI";
import songsAPI from "./data/songsAPI";
import axios from "axios";

function App() {
  // Use state + funcao para setar o card de se inscrever
  const [cardsign, setCardsign] = useState(false);
  function showCardSign() {
    setCardsign(!cardsign);
  }

  // FIND SONGS
  const [search, setSearch] = useState("");
  const [songsData, setSongsData] = useState(null);

  useEffect(() => {
    async function findSong() {
      try {
        if (!search.trim()) {
          setSongsData(null);
          return;
        }
        const { data } = await axios.get(
          `https://itunes.apple.com/search?term=${encodeURIComponent(search)}&entity=song&limit=10`,
        );
        setSongsData(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    findSong();
  }, [search]);

  return (
    <div className="relative">
      {/* Adicioa o card na tela se o user clicar em um botão antes de se fzr o "login" */}
      {cardsign && <Cardsignup hiddenCard={showCardSign} />}
      <div className="h-screen flex flex-col bg-zinc-950">
        <SignUpHeader search={search} setSearch={setSearch} />
        <div className="flex flex-1 gap-2 p-2 overflow-hidden">
          <SingUpAside cardBtn={showCardSign} />
          <main className="flex flex-1 flex-col p-10  overflow-y-auto bg-linear-to-b from-zinc-800 to-zinc-950 rounded-lg relative">
            <div className="flex flex-col gap-1">
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
              <div className="flex gap-5 overflow-hidden mb-5">
                {songsData ? (
                  songsData.map((s) => (
                    <Songs cardSign={showCardSign}
                      key={s.trackId}
                      title={s.artistName}
                      cover={s.artworkUrl100}
                      description={s.collectionName}
                    />
                  ))
                ) : (
                  <div className="flex gap-5 overflow-hidden mb-5">
                    {songsAPI.map((song) => (
                      <Songs cardSign={showCardSign}
                        key={song.id}
                        title={song.title}
                        cover={song.cover}
                        description={song.description}
                      />
                    ))}
                  </div>
                )}
              </div>
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
              <div className="flex gap-5 h-auto overflow-hidden">
                {artistsAPI.map((artist) => (
                  <Artists cardSign={showCardSign}
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
    </div>
  );
}

export default App;
