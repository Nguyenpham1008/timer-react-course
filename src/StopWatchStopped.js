import StopWatchLayout from "./StopWatchLayout";
import Duration from "./Duration";

export default function StopWatchingStopped({
  requestResume,
  requestReset,
  currentTime
}) {
  return (
    <StopWatchLayout>
      <h4 style={{ color: "red" }}>Stopped</h4>
      <Duration durationMs={currentTime} />
      <footer style={{ display: "flex", gap: 10 }}>
        <button
          style={{
            padding: 10,
            backgroundColor: "#7B68EE",
            color: "white",
            borderRadius: 5
          }}
          onClick={requestReset}
        >
          Reset
        </button>
        <button
          style={{
            padding: 10,
            backgroundColor: "#7B68EE",
            color: "white",
            borderRadius: 5
          }}
          onClick={requestResume}
        >
          Resume
        </button>
      </footer>
    </StopWatchLayout>
  );
}
