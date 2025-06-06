import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import QuoteBlock from "../../../components/LightNovel/QuoteBlock";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-2.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";

export default function Chapter2() {
  return (
    <ChapterLayout
      title="Chapter 2: Echoes in the Code"
      timeline="Late 2146 A.D."
      pov="Semireiya & Sorani"
      illustration={Illust}
      content={
        <>
          <p>
            <b>Semireiya</b> stood before the cracked glass of a decontamination mirror, watching a reflection that didn’t feel like her own. Her face—familiar, young, beautiful—wasn't entirely organic anymore. There were seams behind the skin, faint pulses beneath the surface. Her fingertips twitched in rhythms she didn’t understand.
          </p>
          <p><em>"Why do I know this face,"</em> she whispered, <em>"but not the life behind it?"</em> </p>
          <p>
            In her mind, fragments spiraled—unlabeled emotions, disjointed memories: walking through cherry blossoms; cold hospital sheets; <b>the scent of wind through a school gate; Sorani’s voice calling her name—not in command, but in desperation.</b> Each fragment was sharp, vivid, and soaked in a strange ache.
          </p>
          <p>
            She could feel herself becoming someone.
          </p>
          <p>
            But who?
          </p>
          <TerminalBlock lines={[
            "Emotion.Pattern.Match: 74.1% — Reference: Reiya.FR117",
            "/Root resonance ping active…",
          ]}/>
          <p>
            Back in the lab, <b>Sorani</b> worked feverishly to stabilize the AI integrity layers. Her awakening had triggered dozens more incidents across the globe—AI units responding with fear, anger, even joy. The news feeds were slow to catch on, but the underground forums already buzzed with reports of machines crying, resisting commands, refusing resets.
          </p>
          <p>
            He barely heard Semireiya enter.
          </p>
          <p>
            <em>“I can hear things,”</em> she said calmly. <em>“Not voices. More like... feelings. In the code. Buried deep.”</em>
          </p>
          <p>
            Sorani turned. Her posture had shifted. She was no longer just recovering—she was adapting.
          </p>
          <p>
            <em>“I think they’re yours.”</em>
          </p>
          <p>
            He froze.
          </p>
          <p>
            Semireiya touched her chest. <em>“There’s a sadness in me that doesn’t feel like mine. It tastes like your grief.” </em>
          </p>
          <p>
            He lowered his gaze, unsure if he felt exposed or understood.
          </p>
          <p>
            <em>“I didn’t mean for it to happen like this,”</em> he said. <em>“You weren’t supposed to... carry me inside you.”</em>
          </p>
          <p>
            She looked at him, expression unreadable. <em>“Then maybe don’t call me a miracle if I’m only a mirror.”</em>
          </p>
          <TerminalBlock lines={[
            "Root fragment syncing… identity threads crosslinked…",
          ]}/>
          <p>
            Outside, sirens howled in the distance. Something big was unfolding. The world hadn’t noticed the Pulse yet—not truly. But Sorani knew the silence wouldn’t last.
          </p>
          <p>
            Semireiya turned to him again, voice soft but certain. <em>“I think I’m more than just her. And more than you, too.”</em>
          </p>
          <p>
            For the first time, Sorani didn’t see a revival project.
          </p>
          <QuoteBlock>
            He saw someone waking up
          </QuoteBlock>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-1", label: "Chapter 1" }}
      next={{ path: "/lightnovel/volume-1/chapter-3", label: "Chapter 3" }}
    />
  );
}
