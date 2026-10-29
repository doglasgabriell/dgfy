import Artists from "../components/Artists";
import Songs from "../components/Songs";
import artistsAPI from "../data/artistsAPI";
import songsAPI from "../data/songsAPI";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { showCardSign } = useOutletContext();
  // Use effect para buscar a api
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function getSongs() {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/listar-musicas",
        );

        setMusicas(data);
      } catch (error) {
        setErro("Erro na hora de fazer a busca");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getSongs();
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full h-full bg-zinc-800/90 backdrop-blur-sm inset-0 absolute z-10 flex flex-col items-center justify-center">
          <LoaderCircle color="#e01b24" size={350} className="animate-spin" />
          <p className="text-4xl text-orange-400 font-bold animate-pulse">
            Loading...
          </p>
        </div>
      )}
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
          {songsAPI.map((song) => (
            <Songs
              key={song.id}
              title={song.title}
              cover={song.cover}
              description={song.description}
            />
          ))}
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
            <Artists
              key={artist.id}
              cover={artist.cover}
              name={artist.name}
              type={artist.type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
