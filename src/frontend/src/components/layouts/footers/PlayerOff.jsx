// import icons react-lucide
import {
  Pause,
  StepBack,
  StepForward,
  VolumeX,
  Volume,
  Volume1,
  Volume2,
  Shuffle,
} from "lucide-react";

import { useContext, useEffect, useState } from "react";
import { ExpandedContext } from "../../../context/ExpandedContext";

const PlayerOff = () => {
  // Input range
  const [range, setRange] = useState(5);
  const [iconVolume, setIconeVolume] = useState(<VolumeX />);
  useEffect(() => {
    const volumeIcon = () => {
      if (range < 2 && range > 0) {
        setIconeVolume(<Volume color="#ff8000" />);
      } else if (range >= 2 && range < 5) {
        setIconeVolume(<Volume1 color="#ff8000" />);
      } else if (range >= 5 && range <= 10) {
        setIconeVolume(<Volume2 color="#ff8000" />);
      } else {
        setIconeVolume(<VolumeX color="#ff8000" />);
      }
    };
    volumeIcon();
  }, [range]);

  // Toggle shuffle
  const [shuffle, setShuffle] = useState(true);
  const swithShuffle = () => setShuffle(!shuffle);

  // EXPANDED CONTEXT
  const { expanded } = useContext(ExpandedContext);

  return (
    <div className={`flex bg-zinc-950 w-full justify-center items-center ${expanded ? "max-h-0 opacity-0 overflow-hidden p-0" : "max-h-24 opacity-100 p-2 "} transition-[height_opacity] duration-1000`}>
      <div className="w-1/3 flex h-full"></div>

      {/* main player */}
      <div className="w-1/3 flex flex-col">
        {/* Stop and next song */}
        <div className="flex gap-5 items-center justify-center opacity-50">
          <StepBack className="cursor-not-allowed" color="#ff8000" />
          <div className=" bg-zinc-700 rounded-full cursor-not-allowed p-2">
            <Pause color="#ff8000" />
          </div>
          <StepForward className="cursor-not-allowed" color="#ff8000" />
        </div>

        {/* minutes song */}
        <div className="flex items-center justify-center gap-2 text-white opacity-70">
          <span>0:00</span>
          <div className="w-3/4 h-1 bg-zinc-100 cursor-not-allowed"></div>
          <span>0:00</span>
        </div>
      </div>

      {/* volume */}
      <div className="w-1/3 flex items-center justify-end gap-3 px-5">
        <button className="cursor-pointer" onClick={swithShuffle}>
          {shuffle ? (
            <Shuffle
              className="hover:scale-110 transition-all"
              color="#ff8000"
              size={20}
            />
          ) : (
            <div className="flex flex-col items-center justify-center relative">
              <Shuffle
                className="hover:scale-110 transition-all"
                color="white"
                size={20}
              />
              <span className="text-white absolute top-0 text-3xl ">.</span>
            </div>
          )}
        </button>
        {/* <Volume color="#ff8000" size={20} /> */}
        {iconVolume}
        <input
          className="cursor-pointer range accent-orange-500"
          onInput={(e) => {
            setRange(e.target.value);
            console.log(e.target.value);
          }}
          id="volume"
          type="range"
          min={0}
          max={10}
        />
      </div>
    </div>
  );
};

export default PlayerOff;
