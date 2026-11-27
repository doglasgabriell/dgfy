import ImageTeste from "../../assets/coverArtists/Doglas & lavinia.png";

const PlaylistPage = () => {
  return (
    <div className="w-full h-full min-h-0 bg-green-700">
      <div className="w-full h-[30%] bg-red-700 rounded-md flex p-5">
        {/* Imagem Teste */}
        <img className="max-h-full" src={ImageTeste} alt={"Teste imagem"} />

        <div className="flex flex-col max-h-full bg-amber-400 w-full p-4">
          <span className="text-white max-h-0.">{"Tipo playlist"}</span>
          <div>
            <span className="text-white text-8xl">{"namePlaylist"}</span>
          </div>
          <span className="text-white">{"Descrição imagem"}</span>
          <span className="text-white">{"104 músicas, cerca de 5h"}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
