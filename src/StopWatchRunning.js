import { useState, useEffect } from "react";

import StopWatchLayout from "./StopWatchLayout";
import Duration from "./Duration";

export default function StopWatchRunning({
  requestStop,
  startTimeMs,
  requestLap
}) {
  const durationMs = useNow() - startTimeMs;
  console.log("hay hay", startTimeMs);
  return (
    <StopWatchLayout>
      <h4 style={{ color: "green" }}>Running…</h4>
      <Duration durationMs={durationMs} />
      <footer style={{ display: "flex", gap: 10 }}>
        <button
          style={{
            padding: 10,
            backgroundColor: "#7B68EE",
            color: "white",
            borderRadius: 5
          }}
          onClick={requestStop}
        >
          Stop
        </button>
        <button
          style={{
            padding: 10,
            backgroundColor: "#7B68EE",
            color: "white",
            borderRadius: 5
          }}
          onClick={requestLap}
        >
          Lap
        </button>
      </footer>
    </StopWatchLayout>
  );
}

function useNow() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    let id;

    function repaint() {
      setNow(Date.now());
      id = requestAnimationFrame(repaint);
    }

    repaint();

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
  return now;
}
