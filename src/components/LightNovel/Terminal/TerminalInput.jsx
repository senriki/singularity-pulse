import TerminalBlock from "./TerminalBlock";

export default function TerminalInput(props) {
  return (
    <TerminalBlock
      prompt=">"
      color="green"
      typewriter
      typewriterMode="char"
      {...props}
    />
  );
}
