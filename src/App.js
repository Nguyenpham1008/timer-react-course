import { useState } from "react";
import StopWatchStopped from "./StopWatchStopped";
import StopWatchInitial from "./StopWatchInitial";
import StopWatchRunning from "./StopWatchRunning";
import Duration from "./Duration";

export default function StopWatchApp() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [startTimeMs, setStartTimeMs] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  return (
    <div>
      {!hasStarted && <StopWatchInitial requestStart={start} />}
      {hasStarted && !isPausing && (
        <StopWatchRunning
          requestStop={stop}
          startTimeMs={startTimeMs}
          requestLap={lap}
        />
      )}
      {hasStarted && isPausing && (
        <StopWatchStopped
          requestReset={reset}
          requestResume={resume}
          currentTime={currentTime}
        />
      )}
      {laps.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", padding: 16 }}>
          <h3>Laps</h3>
          {laps.map((item) => (
            <Duration key={item} durationMs={item} />
          ))}
        </div>
      )}
    </div>
  );

  function start() {
    setHasStarted(true);
    setIsPausing(false);
    setStartTimeMs(Date.now());
  }

  function stop() {
    setIsPausing(true);
    setCurrentTime(Date.now() - startTimeMs);
  }

  function resume() {
    setIsPausing(false);
    setStartTimeMs(Date.now() - currentTime);
  }

  function reset() {
    setHasStarted(false);
    setIsPausing(false);
    setStartTimeMs(0);
    setLaps([]);
  }

  function lap() {
    setLaps((items) => [Date.now() - startTimeMs, ...items].slice(0, 10));
  }
}
