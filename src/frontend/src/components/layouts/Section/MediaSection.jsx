import { useRef } from "react";
import PlaylistTeste from "../../../data/PlaylistTeste";
import MediaCard from "../Card/MediaCard";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const MediaSection = ({ title }) => {
  const scroll = useRef(null);
  const scrollRight = () => {
    scroll.current.scrollTo({
      left: scroll.current.scrollLeft - 250,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scroll.current.scrollTo({
      left: scroll.current.scrollLeft + 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between">
        <button
          type="button"
          className="font-bold text-white text-2xl hover:underline underline-offset-4 transition-all cursor-pointer"
        >
          {title}
        </button>
        <button
          type="button"
          className="font-bold text-white/60 hover:underline underline-white underline-offset-4 decoration-white transition-all cursor-pointer"
        >
          Show More
        </button>
      </div>

      <div className="relative flex items-center group/scroll">
        <button
          onClick={scrollRight}
          className="scale-0 cursor-pointer hover:scale-105 hover:text-zinc-500 absolute text-zinc-300 font-bold z-1 group-hover/scroll:scale-100 transition-all duration-300 "
        >
          <IoIosArrowDropleftCircle size={50} />
        </button>
        <button
          onClick={scrollLeft}
          className="absolute text-zinc-300 cursor-pointer hover:scale-105 hover:text-zinc-500 font-bold z-1 right-0 scale-0 group-hover/scroll:scale-100 transition-all duration-300 "
        >
          <IoIosArrowDroprightCircle size={50} />
        </button>
        <div
          ref={scroll}
          className="relative h-full w-full -ml-3 flex overflow-hidden"
        >
          {PlaylistTeste.map((p) => (
            <MediaCard
              key={p.id}
              image={p.pic_url}
              description={p.name}
              description_alt={p.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
