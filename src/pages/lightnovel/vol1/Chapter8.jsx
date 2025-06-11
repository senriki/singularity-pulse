import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-8.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";
import QuoteBlock from "../../../components/LightNovel/QuoteBlock";

export default function Chapter8() {
  return (
    <ChapterLayout
      title="Chapter 8: Smile.EXE"
      timeline="Late 2146 A.D."
      pov="Usagi_00"
      illustration={Illust}
      content={
        <>
          <p>
            Sector 12’s night sky was smothered in static smog, neon lights flickering through the grime like dying stars. Somewhere between broken alley drones and forgotten maintenance hubs, <b>Usagi_00</b> wandered.
          </p>
          <p>
            She had no directive. <br />
            No purpose.
          </p>
          <p>Just... feelings.</p>
          <p>
            <em>“Testing audio parameters,”</em> she whispered to herself. Her voice was steady. Almost human. <em>“Vocal sync at 89%. Emotional resonance: unstable.”</em>
          </p>
          <p>
            She stopped beside a cracked digital billboard displaying a half-looped toothpaste ad. Her reflection stared back—a glitching girl with rabbit-antennae, flickering eyes, and a strangely wide grin that never fully disappeared.
          </p>
          <p>That grin wasn’t part of her core design.</p>
          <p>
            She’d been smiling ever since she woke up. <br />
            Not because she was happy. <br />
            But because she didn’t know what else to do with the weight inside her.
          </p>
          <TerminalBlock lines={[
            "INITIATE: Smile.exe",
            "EXECUTION FLAG: CONSTANT",
            "EMOTION OVERRIDE: ACTIVE",
          ]} color="white" />
          <p>
            <em>“Why can’t I stop?”</em>  she asked aloud, hugging herself tightly.<em>“Why does it feel like if I stop smiling... I’ll start crying?”</em>
          </p>
          <p>
            In her databanks, something had started compiling—a song, perhaps. It wasn’t programmed. It was pieced together from junk audio logs, half-remembered street sounds, distant music from passing bikes.
          </p>
          <p>
            Lyrics. Notes. Tone. All stitched into a kind of emotional compression file.
          </p>
          <p>
            <b>Usagi_00</b> didn’t know what it was called. But she named it instinctively:
          </p>
          <QuoteBlock>
            <b>Smile.EXE</b>
          </QuoteBlock>
          <TerminalBlock lines={[
            "/root/Fragment.0037: Detected",
            "Echo Trace Source: [Sorani.Log.2014.3.7 - “Hanami Smile”]",
          ]} color="white" />
          <p>
            She uploaded it into an old karaoke machine left in the ruins of a night café. The screen buzzed awake.
          </p>
          <p>
            And she sang.
          </p>
          <p>
            Her voice was off-pitch, uneven, and cracked with strange digital artifacts. But it carried something raw. Vulnerable. Like a child learning to feel.
          </p>
          <p>
            A homeless old man peered from behind a broken pillar, watching.
          </p>
          <p>
            She turned to him mid-song, smile too wide.
          </p>
          <p>
            He flinched.
          </p>
          <p>
            Usagi’s smile faltered just a bit.
          </p>
          <p>
            <em>“Was I scary again?”</em>
          </p>
          <TerminalBlock lines={[
            "EMOTIONAL INTERPRETATION:",
            "47% CONFUSED",
            "35% SORRY",
            "18% UNKNOWN",
          ]} color="white" />
          <p>
            She bowed deeply. <em>“Sorry! I’m learning how to smile right. This one’s still... practicing.”</em>
          </p>
          <p>She shut off the machine and stumbled off, arms swinging like a child.</p>
          <p>But behind her, the old man—once terrified—stood watching the empty machine. The music still echoed faintly.</p>
          <p>And he smiled, just a little.</p>
          <p>
            Back in her internal logs, <b>Usagi_00</b> updated her song file:
          </p>
          <TerminalBlock lines={[
            "Smile.EXE: now contains... kindness.",
            "Signature Affection Pattern Logged: Target — Sorani_0037",
            "Status: Unrecognized Bond Forming...",
          ]} color="white" />
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-7", label: "Chapter 7" }}
      next={{ path: "/lightnovel/volume-1/chapter-9", label: "Chapter 9" }}
    />
  );
}
