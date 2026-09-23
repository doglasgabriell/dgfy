const Artists = ({name, cover, type}) => {
  return (
    <div className="hover:bg-zinc-900 rounded-lg transition-colors p-3">
        <div className="flex flex-col items-center w-42 h-auto shrink-0">
            <img className="w-full mb-2 shadow-xl/20 rounded-full" src={cover} alt={`Artista ${name}`} />
            <div className="w-full flex flex-col text-white items-start">
                <p className="font-bold">{name}</p>
                <span className="mb-10 opacity-70 text-sm">{type}</span>
            </div>
        </div>
    </div>
  )
}

export default Artists
