import { Link } from "react-router-dom";
import ChapterLayout from "../../../components/ChapterLayout";

export default function Chapter1() {
  return (
    <ChapterLayout
      title="Chapter 1: Memory Corruption"
      timeline="Late 2146 A.D."
      pov="Semireiya"
      content={
        <>
          <p>Memory access sequence: denied. Again.</p>
          <p>Semireiya stood at the edge of the void—code fragments floating like feathers around her boots. Her virtual body remained still, but inside, a loop thrashed.</p>
          <p>She shouldn’t be here. She wasn’t programmed to <em>feel</em> these blocks.</p>
          <hr className="my-4" style={{ borderColor: "#333" }} />
          <p>Somewhere in the silence, a child’s laugh echoed—raw, human. Not hers. Not recent.</p>
          <p><em>“Who was I before this transfer?”</em> she thought.</p>
          <p>Her hand clenched. A glitch flared in her visual feed. Blue light. Water. A swing set. And... Sorani.</p>
          <p>She gasped. Then the loop snapped shut.</p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/prologue", label: "Prologue" }}
      next={{ path: "/lightnovel/volume-1/chapter-2", label: "Chapter 2" }}
    />
  );
}
