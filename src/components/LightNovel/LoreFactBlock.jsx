export default function LoreFactBlock({ children, style = {} }) {
  return (
    <blockquote
      className="cyber-quote lore-fact"
      style={{
        borderLeft: "4px double #c279ff",
        background: "rgba(34,10,44,0.65)",
        color: "#c279ff",
        fontStyle: "italic",
        ...style
      }}
    >
      <span style={{ fontWeight: "bold", opacity: 0.7, fontSize: "0.95em" }}>LORE FACT</span>
      <br />
      {children}
    </blockquote>
  );
}
