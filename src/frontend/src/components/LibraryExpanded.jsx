import { Play } from "lucide-react";

const LibraryExpanded = ({ image, name, type, description }) => {
  return (
    <div className="w-11/12 flex gap-3 items-center hover:bg-zinc-700/60 p-1 cursor-pointer rounded-sm">
      <div className="w-max h-max relative flex items-center justify-center">
        <Play color="#ff8000" className="absolute" />
        <img className="w-14" src={image} alt={description} />
      </div>

      <div className="flex flex-col">
        <span className="text-zinc-200 font-medium">{name}</span>
        <span className="text-zinc-300/70">{type}</span>
      </div>
    </div>
  );
};

export default LibraryExpanded;
