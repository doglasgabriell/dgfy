import PlaylistTeste from "../../../data/PlaylistTeste";
import MediaCard from "../Card/MediaCard";

const MediaSection = ({ title }) => {
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

      <div className="h-full w-full flex overflow-auto">
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
  );
};

export default MediaSection;
