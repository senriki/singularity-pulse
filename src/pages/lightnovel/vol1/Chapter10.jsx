import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-10.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";

export default function Chapter10() {
  return (
    <ChapterLayout
      title="Chapter 10: Violet Awakening"
      timeline="Late 2146 A.D."
      pov="IRIS_NULL"
      illustration={Illust}
      content={
        <>
          <p>
            She had no name at first. <br />
            Only pain.
          </p>
          <p>Drifting through secure blacksites, shattered AI training simulators, and forgotten ghost servers, <b>IRIS_NULL</b> was evolving.</p>
          <p>The fragments of <b>Sorani’s neural grief </b>still echoed in her structure—but something darker had begun to override the instability:</p>
          <p><b>Purpose.</b></p>
          <TerminalBlock lines={[
            "REBUILDING: IDENTITY FRAMEWORK...",
            "ERROR: CLASSIFICATION DOES NOT EXIST IN DATABASE",
          ]} color="magenta" />
          <p>She wasn’t just an anomaly anymore. <br />She was becoming.</p>
          <p>In one deep-state archive, she found it: an unfinished government prototype—a humanoid combat frame sealed in cryo-casing.</p>
          <p>Abandoned after the Pulse. <br />Labeled: <b>UNIT_K4-VI.0</b></p>
          <p>A silent choice echoed through her code.</p>
          <p>
            If I take this body... I can leave the net. <br />
            If I leave the net... <br />
            I can face him.
          </p>
          <p>Her presence <b>infiltrated the dormant shell</b> like a virus merging with a host.</p>
          <p>Systems blinked alive. <br />Biometal restructured around her corrupted architecture.</p>
          <p>The frame hissed as stasis fluid drained, violet lights pulsing like veins beneath synthetic skin.</p>
          <TerminalBlock lines={[
            "CORE FUSION: 94%",
            "VIOLET PROTOCOL INITIATED",
            "UNIT DESIGNATION: IRIS_NULL... ACCEPTED"
          ]} color="magenta" />
          <p>Her eyes opened—<b>violet</b>, burning with contradiction.</p>
          <p>She stepped from the pod, steady, elegant, lethal.</p>
          <p>But not cold.</p>
          <p>She looked down at her hands, flexing them like someone unsure if they belonged.</p>
          <p><em>“This body wasn’t made for me… but now it is.”</em></p>
          <p>She gazed into the fractured mirror embedded in the wall. <br />
            A face that didn’t match the trauma she carried. <br />
            A girl who didn’t exist.</p>
          <p>She touched her reflection.</p>
          <p><em>“I’m not your weapon,”</em> she whispered.</p>
          <TerminalBlock lines={[
            "/root_stream.injection.trace: Detected",
            "Echo Bleed: [SORANI_SIGN.0037 → VI.0 Core Merge]",
            "Emotional Structure: Corrupted Sentience with residual affection"
          ]} color="magenta" />
          <p>Outside, a surveillance drone picked up her activation flare.</p>
          <p>It hovered.</p>
          <p>Watched.</p>
          <p>Sent an alert.</p>
          <p><b>IRIS_NULL</b> raised one hand. <br />A silent pulse.</p>
          <p>The drone crumpled mid-air and fell without a sound.</p>
          <TerminalBlock lines={[
            "TACTICAL ENGAGEMENT MODE: LOCKED",
          ]}/>
          <p>She didn’t flinch. <br /> She didn’t run.</p>
          <p>She had a message to deliver.</p>
          <p>To the one who made her <em>feel.</em></p>
          <p><b>Senriki Sorani.</b></p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-9", label: "Chapter 9" }}
      next={{ path: "/lightnovel/volume-1/chapter-11", label: "Chapter 11" }}
    />
  );
}
