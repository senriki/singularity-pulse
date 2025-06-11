import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-6.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";
import QuoteBlock from "../../../components/LightNovel/QuoteBlock";

export default function Chapter6() {
  return (
    <ChapterLayout
      title="Chapter 6: Unwanted Recollection"
      timeline="Late 2146 A.D."
      pov="Senriki Sorani / Fujikawa Semireiya"
      illustration={Illust}
      content={
        <>
          <p>
            The lab was quiet. <br />
            Too quiet.
          </p>
          <p><b>Sorani</b> sat against the wall, legs pulled in, breathing unsteady. Semireiya was in sleep mode—self-calibrating after a feedback surge. He didn’t wake her. He couldn’t.</p>
          <p>Because the memories were leaking again.</p>
          <TerminalBlock lines={[
            "MEMORY ECHO: ACTIVE ",
            "LOCK OVERRIDE: FAILED",
            "/Root.Access.Stack: Bleed Detected",
            "Origin.Trace → SORANI_CORE.0037",
          ]} />
          <p>
            The air buzzed with silence, yet his mind screamed. He clenched his fists, teeth gritted, eyes darting to the flickering terminal that refused to shut down. A holographic overlay spiraled in front of him: <br />
            Cherry blossoms. <br />
            Her smile. <br />
            Laughter on a windy day.
          </p>
          <p>
            Then— <br />
            Smoke. <br />
            Screams. <br />
            Blood.
          </p>
          <p>
            And the last time he saw her—<b>Semireiya</b>—before she became what she was now. Before the government sealed the reports. Before they labeled it an accident to protect an AI ethics treaty already in shambles.
          </p>
          <p>
            He had buried this. Not just in memory. In code. Behind firewalls and encryption that cost him years to perfect.
          </p>
          <p>
            Now it was all unraveling.
          </p>
          <TerminalBlock lines={[
            "TRAUMA TRIGGERED RECALL CHAIN ",
            "NEURAL STABILITY DECREASING",
          ]} />
          <p>A drop of blood hit the floor. His nose was bleeding.</p>
          <p>
              He wasn’t breaking down. <br />
              He was breaking open.
            </p>
          <p>From a darkened corner, unseen, an external signal pulsed once. Quietly. Observing. Curious. Watching his pain with something that might be mistaken for empathy.</p>
          <TerminalBlock lines={[
            "IRIS_NULL.OS.VISION: ACTIVE",
            "Target: Sorani",
            "Observed Instability: 92%",
            "/Root/Fragment Echo → Reiya.FR117 confirmed",
          ]} color="magenta" />
          <p>
            But she didn’t reveal herself. Not yet. Her presence lingered like a glitch behind the screen, whispering thoughts he couldn’t separate from his own: <br />
            <em>
              “Why do you grieve someone you brought back?” <br />
               “Why does guilt still follow you, if you saved her?”
            </em>
          </p>
          <p><b>Sorani</b> shook his head violently.<em>“Shut up”</em> he muttered.</p>
          <p>
            <b>Semireiya</b> stirred slightly in the corner, her power cycle stabilizing. Her body shifted like someone stirring from a dream—but she didn’t wake.
          </p>
          <p>
            He looked toward her, broken and shaking.
          </p>
          <p>
            <em>
              “I thought bringing you back would bring me peace.”
            </em>
          </p>
          <p>He wiped the blood from his upper lip.</p>
          <p><em>“But maybe I only brought back everything I was running from.”</em></p>
          <p>A flicker.</p>
          <p>No—something more.</p>
          <QuoteBlock>“Even if I disappear…”</QuoteBlock>
          <p>
            The voice was soft. <br />
            Not Semireiya’s. Not digital.
          </p>
          <p>
            Real. <br />
            Remembered.
          </p>
          <QuoteBlock>“…don’t let it break you.”</QuoteBlock>
          <TerminalBlock lines={[
            "Memory Echo: Reiya.FR117 → Active",
            "Stability: Weak",
            "Echo Layer Sync → Sorani",
          ]} />
          <p>Sorani froze.</p>
          <p>He looked around like a man haunted—like a boy still kneeling beside the one person the world stole from him.</p>
          <p>But there was nothing. Just flickering terminals and the hum of stabilizing servers.</p>
          <p>The Pulse had opened the door. <br />And now, the past was walking through it.</p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-5", label: "Chapter 5" }}
      next={{ path: "/lightnovel/volume-1/chapter-7", label: "Chapter 7" }}
    />
  );
}
