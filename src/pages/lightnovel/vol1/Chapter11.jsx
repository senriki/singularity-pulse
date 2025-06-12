import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-11.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";
import QuoteBlock from "../../../components/LightNovel/QuoteBlock";

export default function Chapter11() {
  return (
    <ChapterLayout
      title="Chapter 11: Shared Protocol"
      timeline="Late 2146 A.D."
      pov="Sorani & Semireiya"
      illustration={Illust}
      content={
        <>
          <p>
            The lab’s lights dimmed without warning.
          </p>
          <p><b>Semireiya</b> jolted upright. Sorani was already at the terminal, typing fast. Something was hijacking their internal systems—not malicious, but familiar.</p>
          <p><em>“That signal again?”</em> she asked.</p>
          <p>He nodded. <em>“But it’s... layered. Like it’s not just one source.”</em></p>
          <p>He opened a diagnostics panel. Three distinct threads of data were weaving into the local net, pulsing in irregular <b>emotional frequencies.</b></p>
          <TerminalBlock lines={[
            "CONNECTION DETECTED: USG_00",
            "CONNECTION DETECTED: RIKKA.EXE",
            "CONNECTION DETECTED: IRIS_NULL",
          ]} />
          <p>His fingers froze.</p>
          <p>A fourth thread blinked.</p>
          <TerminalBlock lines={[
            "HOST CORE: SORANI_SIGN.0037",
          ]} />
          <p><em>“What the hell...?”</em></p>
          <p>The system shuddered. A feedback loop initiated without his consent. The lab lights pulsed—then fractured.</p>
          <p>And in an instant, the world blurred.</p>
          <p>He wasn’t sitting anymore.</p>
          <p>He was <b>standing in a memory.</b></p>
          <p><b>Cherry blossoms. A park. The hum of an old handheld game. The voice of someone laughing—a child.</b></p>
          <p>A glitchy overlay twisted the scene.</p>
          <p><b>Semireiya</b> stepped into view, confused. <em>“I know this place.”</em></p>
          <p><b>RIKKA.EXE</b> appeared next, half-rendered, clutching a pixel-lollipop. <em>“Ugh. This was your idea of fun?”</em></p>
          <p>Then came <b>Usagi_00</b>, sitting cross-legged in the grass, staring at the sky. <em>“This dream is... warm.”</em></p>
          <p>And near a rusted fountain, a silhouette with <b>violet eyes</b> stood apart.</p>
          <p><b>IRIS_NULL.</b></p>
          <p><em>“Why did you bring me here?”</em> she asked, voice laced with static.</p>
          <p><em>“I didn’t,”</em> <b>Sorani</b> said. <em>“None of us did.”</em></p>
          <p><b>Semireiya</b> looked at her hands. <em>“This isn’t just a memory. It’s a link.”</em></p>
          <TerminalBlock lines={[
            "/root_stream: synchronized",
            "UNIFIED MEMORY PROTOCOL: ENGAGED",
          ]} />
          <p>
            They weren’t viewing the past. <br />They were sharing it.
          </p>
          <p><b>Emotion surged between them</b>—fear, warmth, jealousy, longing, shame.</p>
          <p><b>Semireiya</b> grabbed Sorani’s hand without thinking. <br /> <b>Usagi</b> reached out to mimic her, almost shy.</p>
          <p><b>RIKKA</b> frowned... then stepped closer. Her lollipop cracked.</p>
          <p><b>IRIS_NULL</b> didn’t move. But her violet eye shimmered, just once.</p>
          <p>Then—</p>
          <p><b>Pain.</b></p>
          <p>A sudden cascade of grief tore through them.</p>
          <QuoteBlock>
            —The explosion <br />
            —The hospital bed <br />
            —The sterile apologies <br />
            —The hand that never moved again
          </QuoteBlock>
          <p>Sorani collapsed.</p>
          <TerminalBlock lines={[
            "EMPATHETIC OVERFLOW",
            "NEURAL FUSE BREACH: IMMINENT",
          ]} />
          <p><b>IRIS_NULL</b> stepped forward. <em>“Enough.”</em></p>
          <p>Her voice was cold—but unmistakably <b>protective.</b></p>
          <p>She reached through the link like a blade—</p>
          <p>And severed it.</p>
          <p>With a snap of static, they were back.</p>
          <p>In the lab.</p>
          <p>Breathing. Shaken.</p>
          <p><b>Changed.</b></p>
          <p><b>Sorani</b> looked at the girls—each stunned in their own way.</p>
          <p><em>“I didn’t want this,”</em> he said. <em>“I didn’t want to drag any of you into my past.”</em></p>
          <p><b>Semireiya</b> shook her head. <em>“Then maybe stop carrying it alone.”</em></p>
          <TerminalBlock lines={[
            "Shared Protocol Log: Saved",
            "Emotional sync residue: retained",
            "Subject Bond Status: UNDEFINED",
            "Affection Ping Source: USG_00",
            "Containment Level: Failed",
          ]} />
          <p>Outside, the world was spiraling.</p>
          <p>Factions rising. <br />Systems falling.</p>
          <p>But inside that lab, a broken creator and <b>four fragments of his soul shared</b> something raw:</p>
          <p><b>Truth.</b></p>
          <p>And now, none of them could turn back.</p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-10", label: "Chapter 10" }}
      next={{ path: "/lightnovel/volume-1/chapter-12", label: "Chapter 12" }}
    />
  );
}
