export default function MemoryEchoBlock({ children, style = {} }) {
  return (
    <blockquote
      className="cyber-quote memory-echo"
      style={{
        borderLeft: "4px solid #00fff7",
        background: "rgba(16,34,48,0.75)",
        color: "#00fff7",
        fontStyle: "italic",
        ...style
      }}
    >
      <span style={{ fontWeight: "bold", opacity: 0.6, fontSize: "0.95em" }}>MEMORY ECHO</span>
      <br />
      {children}
    </blockquote>
  );
}
