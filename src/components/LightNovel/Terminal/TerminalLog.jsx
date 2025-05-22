import TerminalBlock from "./TerminalBlock";

export default function TerminalLog(props) {
  return (
    <TerminalBlock
      prompt=">>"
      color="cyan"
      typewriter
      typewriterMode="line"
      {...props}
    />
  );
}