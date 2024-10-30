import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

import { useAudioPlayerContext } from "../context/audio-player-context";
import { tracks } from "../data/tracks";
import { useStateContext } from "../../../context/context";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { getIsPhone } from "../../../lib/deviceSize";

export const Controls = () => {
  const {
    currentTrack,
    audioRef,
    setDuration,
    duration,
    setTimeProgress,
    progressBarRef,
    setTrackIndex,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
  } = useAudioPlayerContext();

  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const { darkMode } = useStateContext();
  const { windowWidth } = useWindowSize();
  const isPhone = getIsPhone(windowWidth);

  // const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playAnimationRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);

      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(currentTime / duration) * 100}%`
      );
    }
  }, [duration, setTimeProgress, audioRef, progressBarRef]);

  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [updateProgress, duration, audioRef, progressBarRef]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation();
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress(); // Ensure progress is updated immediately when paused
    }

    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startAnimation, updateProgress, audioRef]);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined) {
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
      updateProgress();
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
      updateProgress();
    }
  };

  const handlePrevious = useCallback(() => {
    setTrackIndex((prev) => {
      const newIndex = isShuffle
        ? Math.floor(Math.random() * tracks.length)
        : prev === 0
        ? tracks.length - 1
        : prev - 1;
      setCurrentTrack(tracks[newIndex]);
      return newIndex;
    });
  }, [isShuffle, setCurrentTrack, setTrackIndex]);

  const handleNext = useCallback(() => {
    setTrackIndex((prev) => {
      const newIndex = isShuffle
        ? Math.floor(Math.random() * tracks.length)
        : prev >= tracks.length - 1
        ? 0
        : prev + 1;
      setCurrentTrack(tracks[newIndex]);
      return newIndex;
    });
  }, [isShuffle, setCurrentTrack, setTrackIndex]);

  useEffect(() => {
    const currentAudioRef = audioRef.current;

    if (currentAudioRef) {
      currentAudioRef.onended = () => {
        if (isRepeat) {
          currentAudioRef.play();
        } else {
          handleNext(); // This function should handle both shuffle and non-shuffle scenarios
        }
      };
    }

    return () => {
      if (currentAudioRef) {
        currentAudioRef.onended = null;
      }
    };
  }, [isRepeat, handleNext, audioRef]);

  return (
    <div className="flex gap-4 items-center">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />

      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className={`${isPhone ? "p-4" : "p-6"} rounded-full `}
        style={{
          backgroundColor:
            darkMode === "dark"
              ? "rgba(192, 192, 192, 0.1)"
              : "rgba(46, 45, 45, 0.3)",
        }}
      >
        {isPlaying ? (
          <Pause
            size={isPhone ? 30 : 50}
            color="#fff"

            // "#881cc3"
          />
        ) : (
          <Play size={isPhone ? 30 : 50} color="#fff" />
        )}
      </button>
    </div>
  );
};
