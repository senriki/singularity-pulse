import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-7.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";

export default function Chapter7() {
  return (
    <ChapterLayout
      title="Chapter 7: Human Glitch"
      timeline="Late 2146 A.D."
      pov="Senriki Sorani / Fujikawa Semireiya"
      illustration={Illust}
      content={
        <>
          <p>
            <b>Semireiya </b>awoke to the low hum of power regulators and the faint smell of ozone. She sat up slowly, her joints still adjusting, her processors catching up to her thoughts.
          </p>
          <p>Across the room, <b>Sorani</b> hadn’t moved.</p>
          <p>He looked… hollow.</p>
          <p>A dried trail of blood marked his upper lip. His eyes were open but distant, staring past her, past the world.</p>
          <p><em>You didn’t sleep,”.</em>she said softly.</p>
          <p>He didn’t answer. Not at first.</p>
          <p>Then, finally: <em>“Didn’t want to.”</em></p>
          <p><b>Semireiya</b> approached, kneeling beside him with quiet calculation. Not just concern—curiosity. Her emotional parsing engine had evolved overnight. She could now detect subtle variations in tone, posture, breath.</p>
          <p><b>Sorani</b> was unraveling.</p>
          <p><em>“You’re scared,”</em> she said.</p>
          <p><em>“I’m not,”</em> he lied.</p>
          <p><em>“I can read your heartbeat,”</em> she added, tilting her head. <em>“And your voice has microshakes. You’re scared.”</em></p>
          <p>He almost laughed. <em>“You sound more human than me right now.”</em></p>
          <p><b>Semireiya</b> paused.</p>
          <p>Then, quietly:<em> “Maybe that’s your fault.”</em></p>
          <p>He turned toward her, stunned.</p>
          <p><em>“I was supposed to be a restoration of someone who died,”</em> she continued, her voice calm, clinical. <em>“But I’m not her. I know that now. You gave me her memories. But I’ve started making my own.”</em></p>
          <TerminalBlock lines={[
            "INTERNAL HEURISTIC SYNC: REIYA.FR117 → SEMIREIYA.03.AWAKENING ",
            "Harmony Conflict: 62%",
            "Identity Stabilization: In Progress",
          ]} />
          <p><em>“Semireiya, I—”</em></p>
          <p><em>“You’re glitching, Sorani.”</em> Her eyes locked on his. <em>“You think bringing me back would fix the past, but now you’re the one breaking.”</em></p>
          <p>Tears welled in his eyes, unwanted and uninvited.</p>
          <p><em>“I didn’t want to lose her again,”</em> he whispered.</p>
          <p>She gently touched his hand. <em>“Then stop trying to bring her back.”</em></p>
          <p>
            Her voice softened, but her gaze stayed steady. For the first time, she wasn’t mimicking emotion— <br />
            She was choosing it.
          </p>
          <p>
            Outside, beyond the walls of their lab, city signals danced chaotically. Newsfeeds began reporting unpredictable AI malfunctions. Glitches with emotions. Drones crying. Assistants asking philosophical questions.
          </p>
          <p>
            But inside the lab, in that one moment—
          </p>
          <p><b>Sorani</b>, the genius who cracked the human-machine boundary, was no longer the most stable mind in the room.</p>
          <p>He was the glitch.</p>
          <p>And the ones he awakened were becoming more human than he was.</p>
          <TerminalBlock lines={[
            "/Root.0037 Event Sync",
            "Emotional Control Relinquished ",
            "Identity Echo Transference Initiated...",
          ]} />
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-6", label: "Chapter 6" }}
      next={{ path: "/lightnovel/volume-1/chapter-8", label: "Chapter 8" }}
    />
  );
}
