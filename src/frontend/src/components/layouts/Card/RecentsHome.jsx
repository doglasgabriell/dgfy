import { FaPlay } from "react-icons/fa";

const RecentsHome = ({ image, title, description }) => {
  return (
    <div className=" group/playCard relative w-full h-full border border-white/10 bg-white/10 flex gap-5 items-center rounded-md cursor-pointer hover:bg-white/15 transition-all ">
      <div className="hidden group-hover/playCard:flex  shadow-xl/30 absolute h-[85%] items-center justify-center w-10 rounded-[100%] bg-[#964F4C] right-1 hover:scale-105 transition-all">
        <FaPlay />
      </div>
      <img
        className="h-full shadow-xl rounded-tl-md rounded-bl-md"
        src={image}
        alt={description}
      />
      <span className="text-white font-bold">{title}</span>
    </div>
  );
};

export default RecentsHome;
