import { useOutletContext } from "react-router-dom";

const Songs = ({ title, cover, description }) => {
  const { showCardSign } = useOutletContext();
  return (
    <div onClick={showCardSign} className="hover:bg-zinc-800 rounded-lg transition-colors p-2 cursor-pointer">
      <div className="flex flex-col items-center w-42 h-auto shrink-0 ">
        <img className="w-full mb-2 shadow-xl/20 rounded-md" src={cover} alt={title} />
        <div className="w-full flex flex-col text-white items-start">
          <h2 className="font-bold">{title}</h2>
          <span className="mb-10 opacity-70 text-sm">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Songs;
