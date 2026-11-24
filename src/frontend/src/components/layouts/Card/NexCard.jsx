const NexCard = ({cover, description, name}) => {
  return (
    <div className="flex flex-col h-[31%] p-2 w-full cursor-pointer hover:bg-white/15 rounded-xl">
      <div className="w-full h-full flex gap-3 ">
        <img className="rounded-xl" src={cover} alt={description} />
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold">{name}</span>
          <span className="text-white/60">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default NexCard;
