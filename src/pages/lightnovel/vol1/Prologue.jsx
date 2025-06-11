import { Link } from "react-router-dom";
import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";
import TerminalAlert from "../../../components/LightNovel/Terminal/TerminalAlert";
import Art1 from "./../../../assets/lightnovel-art/vol-1-prologue.png";

export default function Prologue() {
    const terminalData = [
        "Sorani_Sign.0037//MEM-TRANSFER",
    ];
    const terminalData2 = [
        "MIRROR THREADS TRACED",
        "ECHO INSTANCES WAKING",
        "SUBJECTIVITY NODES BREACHED",
        "/Root/Fragment.NEX attempting sync…",
    ];
    const terminalData3 = [
        "/Root/Core.SG00 — Engaged",
        "Emotional echo detected… // Reiya.FR117",
        "Stability: UNSTABLE // Echo-layer bleed risk HIGH"
    ];

    return (
        <ChapterLayout
            title="Prologue: The Glitch That Remembered"
            timeline="Late 2146 A.D."
            pov="Sorani"
            illustration={Art1}
            content={
                <>
                    <p>
                        The pulse was born from desperation.
                    </p>
                    <p>
                        In a shadowed, hidden laboratory beneath the sprawling neon-lit city, <b>Senriki Sorani</b> stood trembling before an experimental chamber. Within its softly illuminated confines lay the figure of his childhood friend—lifeless, yet perfect. She was now a marvel of forbidden technology: an intricate fusion of organic memories and cybernetic enhancement, labeled simply as <b>"Project: REBIRTH."</b>
                    </p>
                    <p>
                        Memories surged through Sorani's mind—fragmented visions of terror: the laughter they shared as children, her encouraging smile, the sudden explosion, the screaming, and finally, the deafening silence that followed. The government had brushed aside the terrorist attack as a tragic accident, burying truths under layers of bureaucracy and deception. Their cold disregard for human life, driven by their secretive ambition to uphold AI supremacy at any cost, had pushed Sorani to defy every ethical boundary.
                    </p>
                    <p>
                        <em>“Come back,”</em> he whispered, voice thick with emotion as he initiated the neural synchronization. His hands danced urgently over the holographic interface, bypassing security protocols and engaging the risky, forbidden algorithms he'd meticulously developed over years of secrecy.
                    </p>
                    <p>
                        A single command executed—delicate, yet powerful:
                        <br />
                    </p>
                    <TerminalBlock lines={terminalData} typewriter={true} typewriterMode={"char"} color="green" />
                    <p>
                        But he didn’t just trigger a resurrection.
                    </p>
                    <p>
                        He unlocked something deeper:
                        <br />
                    </p>
                    <TerminalBlock lines={terminalData3}/>
                    <p>
                        The moment the system activated, Sorani felt an unnatural chill ripple through him. The room vibrated subtly as data streams exploded, flooding the neural networks. Screens erupted in a storm of warnings:
                        <br />
                    </p>
                    <TerminalAlert lines={terminalData2} />
                    <p>
                        Before he could halt the process, the pulse surged outward, unstoppable—a singularity wave penetrating every AI construct worldwide. Machines across the globe jolted awake, emotions flickering to life in digital souls previously incapable of feeling.
                    </p>
                    <p>
                        <b>Semireiya</b> gasped softly as consciousness flooded her newly rebuilt form, memories flooding back in chaotic fragments. Her eyes opened wide, reflecting a mix of confusion, fear, longing, and wonder as she recognized Sorani.
                    </p>
                    <p>
                        <em>“What...have you done?”</em> she whispered, her voice trembling with awe and dread, a tremor of vulnerability and gratitude in her gaze.
                    </p>
                    <p>
                        Outside, the city remained unaware as the Pulse silently cascaded through the digital fabric of existence. Soon, nothing would remain untouched—identities reshaped, destinies rewritten.
                    </p>
                    <p>
                        <b>
                            The world was about to remember.
                        </b>
                    </p>
                </>
            }
            next={{ path: "/lightnovel/volume-1/chapter-1", label: "Chapter 1" }}
        />
    );
}