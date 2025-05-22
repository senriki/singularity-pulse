import TerminalBlock from "./TerminalBlock";

export default function TerminalAlert(props) {
  return (
    <TerminalBlock
      prompt="[!]"
      color="red"
      typewriter
      typewriterMode="char"
      customStyle={{
        background: "#280c10",
        borderLeft: "4px solid #ff2f70"
      }}
      cursorStyle={{
        color: "#ff2f70"
      }}
      {...props}
    />
  );
}