export default function AxiomBlock({ children, style = {} }) {
  return (
    <blockquote
      className="cyber-quote axiom-block"
      style={{
        borderLeft: "4px dashed #ffe158",
        background: "rgba(40,38,0,0.75)",
        color: "#ffe158",
        fontFamily: "'Orbitron', 'Inter', monospace",
        fontStyle: "normal",
        ...style
      }}
    >
      <span style={{ fontWeight: 600, opacity: 0.7 }}>AXIOM</span>
      <br />
      {children}
    </blockquote>
  );
}
