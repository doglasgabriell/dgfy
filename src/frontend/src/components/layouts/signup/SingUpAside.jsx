import { IoMdAdd } from "react-icons/io";

const SingUpAside = ({cardBtn}) => {
  return (
    <aside className="flex flex-col sticky p-3 w-100 bg-linear-to-b from-zinc-800 to-zinc-950 gap-4 rounded-lg">
      <div className="text-white p-4">
        <header className="flex justify-between items-center font-bold">
          <p>Sua biblioteca</p>
          <button onClick={cardBtn} className="bg-zinc-600 p-2 rounded-3xl flex items-center gap-1 cursor-pointer hover:bg-zinc-500 transition-colors">
            <IoMdAdd size={20} /> Criar
          </button>
        </header>
      </div>
      <div className="w-full h-px bg-zinc-500"></div>
      <div className="flex flex-col gap-4 mt-5">
        <div>
          <div className="text-white p-4 bg-zinc-700/80 rounded-sm">
            <p className="font-bold mb-1">Crie sua primeira playlist</p>
            <p>É fácil, vamos te ajudar</p>
            <button onClick={cardBtn} className="bg-zinc-100 text-zinc-800 px-3 py-1 rounded-full mt-5 font-bold hover:bg-zinc-400 transition-colors">
              Criar playlist
            </button>
          </div>
        </div>
        <div>
          <div className="text-white p-4 bg-zinc-700/80 rounded-sm">
            <p className="font-bold mb-1">Que tal seguir um podcast novo?</p>
            <p>Avisaremos você sobre novos episódios.</p>
            <button onClick={cardBtn} className="bg-zinc-100 text-zinc-800 px-3 py-1 rounded-full mt-5 font-bold hover:bg-zinc-400 transition-colors">
              Explore podcasts
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-full text-white opacity-55 items-end">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint magni
          quod officiis obcaecati nulla ducimus maiores deserunt quaerat sunt,
          quisquam porro neque perspiciatis asperiores, labore autem eos
          perferendis possimus nihil.
        </p>
      </div>
    </aside>
  );
};

export default SingUpAside;
