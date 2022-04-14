import StopWatchLayout from "./StopWatchLayout";
import Duration from "./Duration";

export default function StopWatchInitial({ requestStart }) {
  return (
    <StopWatchLayout>
      <h4 style={{ color: "blue" }}>Initial</h4>
      <Duration durationMs={0} />
      <footer className="flex flex-row gap-1">
        <button
          style={{
            padding: 10,
            backgroundColor: "#7B68EE",
            color: "white",
            borderRadius: 5
          }}
          onClick={requestStart}
        >
          Start
        </button>
      </footer>
    </StopWatchLayout>
  );
}
