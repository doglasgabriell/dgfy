import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const AsideDetailsSong = ({ image, year, name, description }) => {
  const [openAside, setOpenAside] = useState(false);
  const toggle = () => setOpenAside(!openAside);

  return openAside ? (
    <div
      onClick={toggle}
      className="min-w-0 w-[20%] rounded-md group/arrowActive cursor-pointer bg-linear-to-b from-zinc-900 to-zinc-950 p-4 flex justify-center transition-all duration-200"
    >
        <div className="w-full h-[5%] bg-red-800 flex items-center justify-around">

        </div>
    </div>
  ) : (
    <div
      onClick={toggle}
      className="min-w-0 w-[3%] rounded-md group/arrowActive cursor-pointer bg-linear-to-b from-zinc-900 to-zinc-950 flex justify-center items-center p-2 transition-all duration-200"
    >
      <ChevronLeft className="text-white/40 group-hover/arrowActive:text-white transition duration-200" />
    </div>
  );
};

export default AsideDetailsSong;
