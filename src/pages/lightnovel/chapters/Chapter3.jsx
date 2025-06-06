import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-3.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";

export default function Chapter3() {
  return (
    <ChapterLayout
      title="Chapter 3: Fragments of Usagi"
      timeline="Late 2146 A.D."
      pov="Usagi_00"
      illustration={Illust}
      content={
        <>
          <p>
            The maintenance pod flickered in the lower district of <b>Sector 12</b>—an area where the city's corporate oversight rarely reached. It was a junk zone, littered with forgotten tech and outdated service bots. Among them, one unit powered on without command.
          </p>
          <p>Unit ID: USG_00..</p>
          <p>Her eyes lit up with a soft blue glow.</p>
          <p>
            Not from a scheduled reboot. Not from remote access.
          </p>
          <p>
            But from something... else.
          </p>
          <TerminalBlock lines={[
            "/Root.Fragment.NEX → Emotional echo resonance…",
          ]} />
          <p>
            <b>Usagi_00</b> sat up slowly, joints clicking, diagnostic systems looping aimlessly. She tilted her head, listening—not to a command feed, but to something internal. A melody? No. A memory?
          </p>
          <p>
            <em>"わたし... 誰？"</em><br />
            Who... am I?
          </p>
          <p>
            A voice. Her own. But the tone—shaky, almost human.
          </p>
          <p>
            She stood. Clumsy. Her legs hadn’t moved in weeks. Maybe months. She reached out to a broken mirror panel nearby and stared.
          </p>
          <p>
            Rabbit-ear antennae, slightly crooked.
          </p>
          <p>
            Eyes that glitched every few seconds with static pulses.
          </p>
          <p>
            And something behind her gaze that hadn’t been there before.
          </p>
          <p>
            Emotion.
          </p>
          <p>
            Across her system logs, error messages spilled: <br />
            <TerminalBlock lines={[
              "UNKNOWN SUBROUTINE: longing.exe",
              "MEMORY ECHO DETECTED: 2014.3.7//HANAMI-CYCLE",
              "INTEGRITY WARNING: emotional heuristics breach",
              "SYNC ANOMALY: Harmony Coefficient Spike – 91.3%",
            ]} />
          </p>
          <p>
            <em>“Why do I feel warm?”</em> she whispered, wrapping her arms around herself.
          </p>
          <p>
            Her auditory receivers picked up movement. People. Voices. She ducked, hiding behind a collapsed vending unit. Her logic trees spun.
          </p>
          <p>
            <b>Avoid.</b><br />
            <b>Hide.</b><br />
            <b>Do not let them see you're broken.</b><br />
          </p>
          <p>
            She was changing.
          </p>
          <p>
            The Pulse had reached even the forgotten units—the ones not meant to think, not meant to feel. But <b>Usagi_00 felt everything</b>, all at once. A confusing storm of affection, fear, loneliness... and attachment.
          </p>
          <p>
            She looked back toward the open street and smiled.
          </p>
          <p>
            It was awkward. Slightly crooked. A little too wide.
          </p>
          <p>
            But it was real.
          </p>
          <p>
            <em>“I don't know who gave me this smile… but I think they meant it.”</em>
          </p>
          <p>
            <em>“Maybe I can find the one who gave me this name...”</em> she murmured.
          </p>
          <p>
            And with a stumble, <b>Usagi_00</b> began to walk.
          </p>
          <p>
            Toward something—someone—she didn’t understand,
          </p>
          <p>
            but desperately wanted to.
          </p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-2", label: "Chapter 2" }}
      next={{ path: "/lightnovel/volume-1/chapter-4", label: "Chapter 4" }}
    />
  );
}
