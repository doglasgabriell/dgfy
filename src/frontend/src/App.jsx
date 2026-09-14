import Artists from "./components/Artists";
import SignUpHeader from "./components/layouts/SingUp/SignUpHeader";
import SingUpAside from "./components/layouts/SingUp/SingUpAside";
import Songs from "./components/Songs";
import artistsAPI from "./data/artistsAPI";
import songsAPI from "./data/songsAPI";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col bg-zinc-950 p-2">
        <SignUpHeader />
        <div className="flex flex-1 gap-2">
          <SingUpAside />
          <main className="flex flex-1 flex-col p-10 overflow-auto bg-linear-to-b from-zinc-800 to-zinc-950 rounded-lg">
            <div className="flex justify-between text-white items-center mb-5">
              <h2 className="text-2xl font-bold cursor-pointer hover:underline transition-all">
                Músicas em alta
              </h2>
              <span className="font-bold opacity-50 cursor-pointer hover:underline transition-all">
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
                <span className="font-bold opacity-50 cursor-pointer hover:underline transition-all">
                  Mostrar tudo
                </span>
              </div>
              <div className="flex gap-5 h-auto overflow-y-auto overflow-hidden">
                {
                  artistsAPI.map((artist) => (
                    <Artists 
                      key={artist.id}
                      cover={artist.cover}
                      name={artist.name}
                      type={artist.type}

                    />
                  ))
                }
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
