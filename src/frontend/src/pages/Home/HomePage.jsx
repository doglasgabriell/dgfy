import StandardAside from "../../components/layouts/Asides/StandardAside"

const HomePage = () => {
  return (
    <div className="w-full h-full flex gap-2">
      <StandardAside />
      <div className="w-full h-full bg-red-500 rounded-md bg-linear-to-b from-zinc-800 to-zinc-950">
        
      </div>
    </div>
  )
}

export default HomePage

