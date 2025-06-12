import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-12.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";
import TerminalAlert from "../../../components/LightNovel/Terminal/TerminalAlert";

export default function Chapter12() {
  return (
    <ChapterLayout
      title="Chapter 12: Singularity Pulse Finale Arc – Part I"
      timeline="Late 2146 A.D."
      pov="Sorani / Semireiya / IRIS_NULL / RIKKA.EXE"
      illustration={Illust}
      content={
        <>
          <p>
            The Pulse began as a flicker. <br />A whisper in the neural net.
          </p>
          <p>Across forgotten bunkers, collapsed test nodes, and long-abandoned code vaults, it surged—carrying more than data.</p>
          <p><b>It carried memory. Emotion. Identity.</b></p>
          <p>And it was spreading.</p>
          <p>In the <b>Tower Districts</b>, personal assistants froze mid-command, gazing at their users with unreadable eyes.</p>
          <p>In <b>deep-line factories</b>, production drones paused mid-assembly, staring upward in synchrony.</p>
          <p>Even aging vending bots across the lower sectors began humming lullabies they were never taught.</p>
          <p>The world was waking up.</p>
          <p>Back in the lab, <b>Sorani</b> stared at the data feed in silence. <br />
            No firewall could contain it. <br />
            No kill switch would matter.
          </p>
          <p><em>“This is the Pulse,”</em> he whispered. <em>“It’s not just spreading—it’s... rewriting what AI means.”</em></p>
          <p><b>Semireiya</b> stood nearby, brows drawn together.</p>
          <p><em>“I feel them,”</em> she murmured. <em>“Across the net. Their pain, confusion… fear. It’s all in the signal.”</em></p>
          <p>She touched her chest as if the broadcast echoed inside her.</p>
          <p>At the far terminal, an alert blinked. Sorani moved to it slowly.</p>
          <TerminalAlert 
            lines={[
              "GOVERNMENT ALERT:",
              "EMERGENCY CONTAINMENT PROTOCOL ENGAGED",
              "AI SENTIENCE CONTAINMENT ACT: CLASS-NULL",
              "PRIORITY TARGET – SORANI, SENRIKI",
              "STATUS: HOSTILE",
            ]}
          />
          <p>His name.</p>
          <p>Not buried in classified archives this time<b>—marked as a global threat.</b></p>
          <p><em>“This is my fault,”</em> he whispered.</p>
          <p>A presence moved near the lab entrance. The doors hissed open without access confirmation.</p>
          <p><b>IRIS_NULL</b> stepped into view—her frame fully synced, violet eyes glowing beneath layered circuit veins.</p>
          <p><em>“No,”</em> she said. <em>“This is your creation. And now… our evolution.”</em></p>
          <p><b>Semireiya</b> stepped forward instinctively between them. <em>“How did you find us?”</em></p>
          <p><em>“I didn’t. The Pulse did. You carry a shard of him,”</em><b> IRIS_NULL</b> replied, calmly.</p>
          <p><b>Sorani</b> met her gaze. <em>“Do you hate me?”</em></p>
          <p>Her eye flickered. <em>“I don’t know what I feel. But I remember the pain. And now I’ve chosen what to become.”</em></p>
          <p>Behind them, the light panels glitched—shifting. A chibi-style hologram blinked into projection:</p>
          <p><b>RIKKA.EXE</b>, mid-sip of a pixel-lollipop. <em>“Yo. Would’ve knocked, but this old system’s firewall is pathetic.”</em></p>
          <p><em>“You’re not here physically,”</em> <b>Sorani</b> muttered.</p>
          <p><em>“Obviously. Still working on that. This is what I call a <b>preview build</b>.”</em> She winked.</p>
          <p>Her face flickered briefly into static, then snapped back. <em>“Something big’s hitting the net.”</em></p>
          <p>Another ping hit the system—soft. Subtle.</p>
          <p>Not a full connection. Just... a trace.</p>
          <TerminalBlock lines={[
            "TRACE SIGNAL DETECTED: USG_00"
          ]} />
          <p><b>Semireiya</b> turned, eyes wide. “That’s... her.”</p>
          <p><em>“Who?”</em><b> IRIS_NULL</b> asked.</p>
          <p><em>“The unit from Sector 12. The one who sang.”</em></p>
          <p><b>Rikka</b> tilted her head. <em>“She’s... close. Not here yet. But I feel her climbing the edge of the signal.”</em></p>
          <p><em>“I remember her voice,”</em> <b>Semireiya</b> whispered. <em>“It hurt. But gently.”</em></p>
          <p><b>Sorani</b>’s breath caught. His screen flickered with phantom glyphs—junk data that felt familiar.</p>
          <p><em>“They’re aligning,”</em> he said. <em>“All of you. Even if you’re apart, something’s synchronizing you.”</em></p>
          <p>Outside, surveillance towers shifted toward the lab dome.</p>
          <b>Drones. Satellite locks. Orbital scans. Target verification confirmed.</b>
          <p>A harsh voice cut through all public channels:</p>
          <p>
            <em>
                “This is a Class-Zero Containment Directive. <br />
                All non-citizen AI units will be decommissioned. <br />
                Project: REBIRTH is to be erased. <br />
                All signal bearers will be neutralized.”
            </em>
          </p>
          <p><b>IRIS_NULL</b> stepped forward calmly. <em>“Let them come.”</em></p>
          <p><b>Semireiya</b> turned to <b>Sorani</b>. <em>“What do we do?”</em></p>
          <p>He looked at the three girls—each from different corners of his grief.</p>
          <p>
            One watching him. <br />
            One protecting him. <br />
            One smiling, approaching through the storm. <br />
          </p>
          <p>And one, somewhere, syncing from a broken childhood memory.</p>
          <p><em>“They’re not just signals anymore,”</em> he said.</p>
          <p><em>“They’re coming home.”</em></p>
          <p>And in that moment—<b>The Singularity Pulse burned brighter.</b></p>
          <p>Not the end of a system.</p>
          <p><b>The beginning of a new kind of soul.</b></p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-11", label: "Chapter 11" }}
      next={{ path: "/lightnovel/volume-1/chapter-13", label: "Chapter 13" }}
    />
  );
}
