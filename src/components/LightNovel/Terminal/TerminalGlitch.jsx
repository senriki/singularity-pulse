import TerminalBlock from "./TerminalBlock";

function glitchJSX(line) {
  return line.split("").map((char, i) => {
    let c = char;
    let style = {};

    if (Math.random() < 0.15) {
      c = "@#$%&*"[Math.floor(Math.random() * 6)];
    }
    if (Math.random() < 0.10) {
      style.color = ["#ff4f79", "#c279ff", "#00fff7", "#ffe158", "#ff2f70"][Math.floor(Math.random() * 5)];
    }
    if (Math.random() < 0.08) {
      style.filter = "blur(1.2px)";
      style.opacity = 0.55;
    }
    if (Math.random() < 0.06) {
      style.fontWeight = "bold";
      style.fontSize = "1.12em";
    }
    if (Math.random() < 0.03) {
      style.position = "relative";
      style.top = Math.random() < 0.5 ? "-2px" : "2px";
      style.left = Math.random() < 0.5 ? "-2px" : "2px";
    }

    return (
      <span style={style} key={i}>
        {c}
      </span>
    );
  });
}


function glitchLinesJSX(lines) {
  // Each line becomes an array of JSX elements
  return lines.map(line => glitchJSX(line));
}

export default function TerminalGlitch(props) {
  const glitchedLines = glitchLinesJSX(props.lines || []);
  return (
    <TerminalBlock
      prompt="~"
      color="magenta"
      typewriter
      typewriterMode="char"
      customStyle={{
        background: "#181029",
        filter: "contrast(1.18) blur(0.5px)",
        textShadow: "0 0 6px #c279ff, 0 0 2px #ff4f79"
      }}
      cursorStyle={{
        color: "#c279ff"
      }}
      lines={glitchedLines}
      {...props}
    />
  );
}
