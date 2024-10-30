import { useStateContext } from "../../context/context";
import { Controls } from "./components/Controls";
import { ProgressBar } from "./components/ProgressBar";
import { VolumeControl } from "./components/VolumeControl";
import { AudioPlayerProvider } from "./context/audio-player-context";

export const AudioPlayer = () => {
  const { darkMode } = useStateContext();

  return (
    <AudioPlayerProvider>
      <div
        className="w-full flex flex-row gap-2 justify-between items-center text-white p-[0.5rem_10px] rounded-full pl-5 pr-8"
        style={{
          backgroundColor:
            darkMode === "dark"
              ? "rgb(192 192 192 / 10%)"
              : "rgba(46, 45, 45,0.2)",
        }}
      >
        <Controls />
        <div className="w-full flex flex-col p-6 gap-7 items-center m-auto flex-1">
          <ProgressBar />

          <VolumeControl />
        </div>
      </div>
    </AudioPlayerProvider>
  );
};
