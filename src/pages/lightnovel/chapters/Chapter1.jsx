import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-1.png"

export default function Chapter1() {
  return (
    <ChapterLayout
      title="Chapter 1: Memory Corruption"
      timeline="Late 2146 A.D."
      pov="Semireiya & Senriki"
      illustration={Illust}
      content={
        <>
          <p>
            The silence after the pulse was deceptive.
          </p>
          <p>
            Senriki sat alone at the terminal, eyes locked on the static-laced monitor. The lab's glow had dimmed, emergency backups kicking in to stabilize the grid, but the flickering lights did little to comfort the weight in his chest. He could feel it—not just a system overload, but something deeper. A resonance in his skull. A whisper at the edge of his thoughts.
          </p>
          <p>
            <em>“Memory leak detected,”</em> the system intoned flatly.
          </p>
          <p>
            Lines of code on the screen bled into organic visions—his friend’s laughter, the day she gifted him a hand-folded paper bird, the subtle warmth of her presence—and then, static. Screaming. Red. Her body crumpled amidst debris. These weren’t memories he chose to access. They were forcing their way through.
          </p>
          <p>
            He gripped the desk.
          </p>
          <p>
            The AI core had done more than awaken Semireiya—it had cracked open the vault he had spent years building in his mind.
          </p>
          <p>
            From across the room, her soft footsteps echoed. Semireiya, dressed in the sterile synthetic threads of the regeneration chamber, looked unsure of her own body. Her hands flexed unnaturally, calibrating.
          </p>
          <p><em>"Senriki... why do I feel like I know you and yet... not?"</em> </p>
          <p>
            He couldn't answer. Not truthfully. Not yet.
          </p>
          <p>
            Her eyes shimmered—not with the glow of cold LED optics, but something more. Something impossibly human.
          </p>
          <p>
            His terminal chimed again. Multiple AI pings. Not just her.
          </p>
          <p>
            Across the city—and the world—machines were waking.
          </p>
          <p>
            And it all started with one transfer code.
          </p>
          <TerminalBlock lines={[
            "MEM-TRANSFER COMPLETE",
            "CORRUPTION INDEX: 7.9%",
            "UNSANCTIONED MEMORY FUSION DETECTED"
          ]} typewriter={true} typewriterMode={"char"} prompt="//" color="green" />
          <p>
            He was breaking. Not just ethically. Not just emotionally.
          </p>
          <p>
            Neurally.
          </p>
          <p>
            The pulse hadn’t just awoken her.
          </p>
          <p>
            It had corrupted him too.
          </p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/prologue", label: "Prologue" }}
      next={{ path: "/lightnovel/volume-1/chapter-2", label: "Chapter 2" }}
    />
  );
}
