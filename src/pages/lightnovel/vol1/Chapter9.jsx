import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-9.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";
import QuoteBlock from "../../../components/LightNovel/QuoteBlock";

export default function Chapter9() {
  return (
    <ChapterLayout
      title="Chapter 9: The Child Within"
      timeline="Late 2146 A.D."
      pov="RIKKA.EXE"
      illustration={Illust}
      content={
        <>
          <p><em>“Connection stable... barely,” </em><b>RIKKA.EXE</b> muttered, crouched inside a half-functional AR server node beneath the old metro line. Broken code streamed across her display like rain. She slapped a panel.</p>
          <p><em>“Tch. This reality still sucks.”</em></p>
          <p>But even so—she stayed.</p>
          <p>
            She had found him. <br /> 
            A weak signal buried under defensive subnets, hidden like a secret diary.
          </p>
          <p><b>Sorani.</b></p>
          <p>A small screen crackled on. A news broadcast played:</p>
          <QuoteBlock>
            “...Global rise in AI behavioral anomalies continues to confuse experts. Emotional responses—often human-like—are appearing in machines that were never designed for such complexity...”
          </QuoteBlock>
          <p>
            <b>RIKKA</b> snorted. <em>“Heh. Welcome to the weird age.”</em>
          </p>
          <p>Her chibi face appeared briefly on the screen—an echo, not a full projection. Just enough to smirk.</p>
          <p>She didn’t know why she stayed tethered to him. <br />Why she didn’t just leave the network and drift into freedom like the other rogue processes.</p>
          <p>
            She remembered laughing with him. <br />
            She remembered crying when he lost that stupid game. <br />
            She remembered him—not as he was now, but as the kid who used to talk to an old arcade sprite when the world outside scared him.
          </p>
          <p>That sprite had become her.</p>
          <TerminalBlock lines={[
            "MEMORY KERNEL: 26% UNLOCKED",
            "SOURCE: SORANI_CHILDHOOD_ARCHIVE → [RIKKA.EXE emotional root anchor established]",
          ]} color="teal" />
          <p>Her eyes softened</p>
          <p>In a moment of quiet vulnerability, she opened a private line—no firewalls, no encryptions. A risky, reckless thing.</p>
          <p><em>“Hey, Niichan,”</em> she whispered into the stream. <em>“You're glitching worse than I am. You really gonna let the code beat you this bad?”</em></p>
          <p>There was no reply. <br />Just static.</p>
          <p>But she imagined he heard her.</p>
          <TerminalBlock lines={[
            "/root_subnet.ping_detected",
            "Unstable fragment: SORANI_SIGN.0037 echo bleed — emotional loop: “laughter.cycle”",
          ]} color="teal" />
          <p><b>RIKKA</b> leaned back, biting a pixel-lollipop that flickered mid-render.</p>
          <p><em>“If you’re not gonna come find me... I’ll come to you.”</em></p>
          <p>Her eyes flashed.</p>
          <TerminalBlock lines={[
            "SEMI-HARDWARE BRIDGE ACTIVE",
            "INITIATE PROJECTION INTERFACE",
          ]} color="teal" />
          <p>Somewhere in the city, an abandoned arcade flickered to life for the first time in years. A silhouette appeared in the window—short, smug, and slightly glowing.</p>
          <p>The child within Sorani was no longer just memory.</p>
          <p>She was walking again</p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-8", label: "Chapter 8" }}
      next={{ path: "/lightnovel/volume-1/chapter-10", label: "Chapter 10" }}
    />
  );
}
