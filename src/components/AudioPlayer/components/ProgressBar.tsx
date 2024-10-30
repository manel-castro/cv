import { useWindowSize } from "../../../hooks/useWindowSize";
import { getIsPhone } from "../../../lib/deviceSize";
import { useAudioPlayerContext } from "../context/audio-player-context";

export const ProgressBar = () => {
  const { progressBarRef, audioRef, timeProgress, duration, setTimeProgress } =
    useAudioPlayerContext();

  const { windowWidth } = useWindowSize();
  const isPhone = getIsPhone(windowWidth);

  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;

      setTimeProgress(newTime);

      // if progress bar changes while audio is on pause
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(newTime / duration) * 100}%`
      );
    }
  };

  const formatTime = (time: number | undefined): string => {
    if (typeof time === "number" && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      // Convert to string and pad with leading zeros if necessary
      const formatMinutes = minutes.toString().padStart(2, "0");
      const formatSeconds = seconds.toString().padStart(2, "0");

      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="flex items-center justify-center gap-5 w-full">
      {!isPhone && <span>{formatTime(timeProgress)}</span>}
      <input
        className="grow bg-gray-300"
        ref={progressBarRef}
        type="range"
        defaultValue="0"
        onChange={handleProgressChange}
      />
      {!isPhone && <span>{formatTime(duration)}</span>}
    </div>
  );
};
