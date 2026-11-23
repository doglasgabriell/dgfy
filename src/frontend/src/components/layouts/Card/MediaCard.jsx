import { FaPlay } from "react-icons/fa";

const MediaCard = ({ image, description_alt, description }) => {
  return (
    <div className="w-40 p-2 h-max flex flex-col rounded-md inset-0 gap-2 items-start shrink-0 hover:bg-white/5 hover transition-all duration-200 group/play cursor-pointer">
      <div className="relative">
        <div className="flex scale-0 group-hover/play:scale-100 hover:scale-105 hover:brightness-120 transition duration-200 ease-in-out absolute bg-[#964F4C] rounded-full h-12 w-12 items-center justify-center right-1 bottom-1 cursor-pointer ">
            <FaPlay />
        </div>
          <img
            className="w-full rounded-md shadow-xl/30"
            src={image}
            alt={description_alt}
          />
      </div>
      <div>
        <p className="text-white/50 ">{description}</p>
      </div>
    </div>
  );
};

export default MediaCard;
