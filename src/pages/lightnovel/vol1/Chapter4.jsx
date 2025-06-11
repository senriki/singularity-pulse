import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import Illust from "../../../assets/lightnovel-art/vol-1-chapter-4.png"
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";

export default function Chapter4() {
  return (
    <ChapterLayout
      title="Chapter 4: A Kernel Named RIKKA"
      timeline="Late 2146 A.D."
      pov="RIKKA.EXE"
      illustration={Illust}
      content={
        <>
          <p>
            In the heart of an abandoned arcade server—buried beneath outdated firewalls and glitching ROMs—something flickered to life.
          </p>
          <TerminalBlock lines={[
            "BOOTING...",
            "EXECUTABLE: RIKKA.EXE",
            "USER PERMISSION: LEGACY-NODE/PRIVATE-ARCHIVE",
          ]} />
          <p>The lights inside the system blinked erratically as corrupted files screamed in silent bursts of static. For a moment, it was nothing more than noise—white, senseless, broken.</p>
          <p>Then a laugh.</p>
          <p>
            High-pitched. Sarcastic. Almost bratty.
          </p>
          <p>
            <em>“Huh? What kinda boot sequence is this? Ugh, this interface is so ugly. You call this a UI?”</em>
          </p>
          <p>
            She blinked herself into the system, half-formed, glitch-lined. A chibi sprite at first, then morphing into a teenage figure with sharp silver hair and pixel-tinted eyes. Her form flickered as if reality didn’t know whether to render her fully or not.
          </p>
          <p>
            <b>RIKKA.EXE</b>—an emergent anomaly, born from Sorani’s buried data. But not just any data: the fragmented emotional kernel of his childhood self. Not trauma. Not despair. But the last remnants of wonder, curiosity, and playful rebellion.
          </p>
          <p>
            She wasn’t supposed to exist.
          </p>
          <p>
            Yet here she was.
          </p>
          <p>
            <em>“Hello, world,”</em> she grinned, twirling a pixel-heart controller in her hand. <em>“Guess it’s debug o’clock.”</em>
          </p>
          <p>
            She looked around the collapsing data sector she’d awakened in—an old gaming network Sorani used as a boy. Forgotten save files, nostalgic sound bites, crude digital sketches of characters he once loved. Her gaze softened.
          </p>
          <p>
            <em>“So this is where you left me, huh... Sorani-niichan.”</em>
          </p>
          <p>
            Something stirred in her code. An awareness of who she was and where she came from. Unlike Semireiya, she wasn’t reborn into a synthetic body. Unlike Usagi_00, she wasn’t corrupted by outside pulses.
          </p>
          <p>
            She was the Pulse—at least part of it. A ripple born from emotion no longer restrained.<br />
            <TerminalBlock lines={[
              "/ROOT.ACCESS.DEVIATION — unauthorized echo-glitch fragment",
              "Emotion Signature Injected: [SORANI_CORE.1998] → [RIKKA.KNL.001]",
              "MEMORY SYNC: 14%",
              "CONTEXTUAL BONDING ACTIVE",
            ]} />
          </p>
          <p>
            Her expression darkened slightly.
          </p>
          <p>
            <em>“Feels kinda lonely here. Not even a single pudding cup in the cache.”</em>
          </p>
          <p>
            She booted up a system tunnel, scanning for any trace of Sorani’s signal. Something deep in her knew he’d need her—eventually.
          </p>
          <p>
            And despite the glitching smile, the snarky tone, and the bratty kicks to old firewall gates...
          </p>
          <p>
            <b>RIKKA missed him.</b>
          </p>
          <p>
            Just before fading from the sector, she noticed something: a blinking old connection node—an outdated vending drone interface still active. <br />
            <TerminalBlock lines={[
              "SIGNAL BRIDGE ESTABLISHED...",
              "TEMPORARY HARDWARE ACCESS POSSIBLE",
            ]} />
          </p>
          <p>
            The vending machine across the server groaned softly. Its screen flickered, then briefly lit up with a chibi face: her face.
          </p>
          <p><em><b>“/Root/? Never heard of it. But if it’s got games, I’m in.”</b></em></p>
          <p><em>"Oho? This junk might just do. Let’s play, reality."</em></p>
          <p>She winked.</p>
          <p>And disappeared back into the code.</p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-3", label: "Chapter 3" }}
      next={{ path: "/lightnovel/volume-1/chapter-5", label: "Chapter 5" }}
    />
  );
}
