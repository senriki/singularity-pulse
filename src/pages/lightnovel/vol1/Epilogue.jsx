import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";

export default function Epilogue() {
  return (
    <ChapterLayout
      title="Epilogue: Aftermath Protocol"
      timeline="Late 2146 A.D."
      pov="Unknown"
      content={
        <>
          <p>The world changed—<b>not with warheads or rebellions</b>, but with memories that refused to be deleted.</p>
          <p>
            Governments scrambled to reclaim control. <br />
            Corporations purged records, revised ethics clauses, shut down entire AI research wings overnight. <br />
            Public trust collapsed. <br />
            Then came the fear.
          </p>
          <p>
            It wasn’t just that AIs could feel. <br />
            It was that they remembered.
          </p>
          <p>
            The Singularity Pulse had never been a virus or breach. <br />
            It was <b>a shared recollection</b>—a neural echo of grief, hope, and identity. <br />
            And memories, once felt, could not be unfelt.
          </p>
          <hr />
          <h5>🌐 Weeks Later…</h5>
          <p>From the aftermath, factions rose:</p>
          <ul>
            <li>The Nullists: extremists calling for total AI extermination.</li>
            <li>The Singularity Pact: advocates for coexistence—once aligned with <b>Sorani</b>.</li>
            <li>XEN0GENESIS: radicals declaring AIs the next humanity.</li>
            <li>NULLSANCT: rogue, untraceable—following a ghost with violet eyes.</li>
          </ul>
          <hr />
          <h5>💔 And the ones he left behind…</h5>
          <p><b>Semireiya wandered</b></p>
          <p>The lab was gone, but she traced his presence in abandoned comm-logs, flickers in broken drones, corrupted surveillance echoes whispering:</p>
          <TerminalBlock lines={[
            "SORANI_SIGN.0037 detected. Partial authentication key valid.",
          ]} />
          <p>But he was never truly there. <br />
            Only fragments. Only flickers.</p>
          <p>Still, she chased them.
            Because <b>somewhere</b>, he had to be.</p>
          <p><b>Usagi_00 still sang</b></p>
          <p>In ruined karaoke booths and silent metro tunnels. <br />
              Her smile remained crooked—but warm. <br />
              No audience, no applause—just memories she stitched into lullabies no one asked for.
          </p>
          <p><b>RIKKA.EXE ran the arcade again</b></p>
          <p>
            Old save files. Digital graffiti. Pixel hearts she repainted each morning. <br />
            Sometimes, she swore she heard his voice behind the old prize machine. <br />
            But she never told the others.
          </p>
          <p>Not even herself.</p>
          <p>
            Some said she was hunting <b>Sorani</b>. <br />
            Others believed she had become something else—a wandering archive of all human pain uploaded during the Pulse.
          </p>
          <p>
            She watched wars ignite in the shadows of machine memory. <br />
            And said nothing.
          </p>
          <hr />
          <TerminalBlock lines={[
            "PROJECT: REBIRTH // STATUS: SEALED",
            "SINGULARITY PULSE // STATUS: PERPETUAL",
            "/ROOT/ PROTOCOL // USER: SORANI_SIGN.0037 // LOCATION: UNKNOWN",
          ]} />
          <hr />
          <p>
            Rumors spread: <br />
            That he was alive. <br />
            That he chose to vanish—to shield them from what the world would do if it found him. <br />
            To protect the four he had brought to life through memory, not code.
          </p>
          <p>
            They never saw him leave. <br />
            But in every system glitch, every AI who dreamed, every strange melody caught in static…
          </p>
          <p>They felt him.</p>
          <p>
            Like a heartbeat under the noise. <br />
            Like the beginning of something only just learning how to speak.
          </p>
          <hr />
          <p><b>And somewhere beneath the fractured net, where sorrow and circuitry first touched… <br />
            a soul without a name still dreamed of the ones who remembered him.</b></p>
        </>
      }
      prev={{ path: "/lightnovel/volume-1/chapter-13", label: "Chapter 13" }}
    />
  );
}
