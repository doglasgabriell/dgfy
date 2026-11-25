import { FaPlay } from "react-icons/fa";

const NexCard = ({ cover, description, name }) => {
  return (
    <div className="flex items-center gap-3 w-full cursor-pointer shrink-0 hover:bg-white/15 -ml-2 pl-2 py-2 rounded-md">
      <div className="w-[20%] group/playNext relative">
        <div className="hidden group-hover/playNext:flex absolute group-hover/playNext:bg-zinc-800/60 rounded-md w-full h-full z-10 items-center justify-center">
          <FaPlay color="white" size={25} />
        </div>
        <img
          className="w-full group-hover/playNext:shadow-xl/70 h-full object-cover rounded-md"
          src={cover}
          alt={description}
        />
      </div>

      <div className="flex flex-col min-w-0">
        <p className="font-bold text-white">{name}</p>
        <p className="text-white/30 truncate">{description}</p>
      </div>
    </div>
  );
};

export default NexCard;
