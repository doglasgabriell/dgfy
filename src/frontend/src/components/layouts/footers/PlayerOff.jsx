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
import { useState } from "react";

const PlayerOff = () => {
  // Input range
  const [range, setRange] = useState(0);

  return (
    <div className="flex h-20 bg-zinc-950 mt-4 w-full justify-center items-center">
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
        <Shuffle color="#ff8000" size={20} />
        <Volume color="#ff8000" size={20} />
        <input
          onChange={(event) => {
            setRange(event.target.value);
          }}
          value={range}
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
