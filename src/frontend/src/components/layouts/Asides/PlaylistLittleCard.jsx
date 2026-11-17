const PlaylistLittleCard = ({ image, description }) => {
  return (
    <div className="w-full h-16 rounded-sm shrink-0 bg-zinc-900 p-2 hover:bg-zinc-700/60 transition-all cursor-pointer">
      <img className="w-full h-full" src={image} alt={description} />
    </div>
  );
};

export default PlaylistLittleCard;
