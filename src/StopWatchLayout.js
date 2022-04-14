export default function StopWatchLayout(props) {
  return (
    <section>
      {props.children}
      <style jsx>{`
        section {
          padding: 16px;
        }
      `}</style>
    </section>
  );
}
