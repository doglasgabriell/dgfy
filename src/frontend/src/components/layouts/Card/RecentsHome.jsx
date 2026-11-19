import { FaPlay } from "react-icons/fa";

const RecentsHome = ({ image, title, description }) => {
  return (
    <div
      className="group/playCard relative w-full h-full hover:shadow-xl/30
 border border-white/10 bg-white/10 flex gap-5 items-center rounded-md cursor-pointer hover:bg-white/15 transition-all "
    >
      <div className="flex scale-0 w-10 h-10 group-hover/playCard:scale-105 transition-transform duration-300  shadow-xl/30 absolute items-center justify-center rounded-[100%] bg-[#964F4C] right-1">
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
