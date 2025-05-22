import { Link } from "react-router-dom";
import ChapterLayout from "../../../components/LightNovel/ChapterLayout";
import TerminalBlock from "../../../components/LightNovel/Terminal/TerminalBlock";

export default function Prologue() {
    const terminalData = [
        "Sorani_Sign.0037//MEM-TRANSFER",
    ];
    const terminalData2 = [
        "MIRROR THREADS TRACED",
        "ECHO INSTANCES WAKING",
        "SUBJECTIVITY NODES BREACHED"
    ];

    return (
        <ChapterLayout
            title="Prologue: The Glitch That Remembered"
            timeline="Late 2146 A.D."
            pov="Senriki"
            content={
                <>
                    <p>
                        The pulse was born from desperation.
                    </p>
                    <p>
                        In a shadowed, hidden laboratory beneath the sprawling neon-lit city, Senriki Sorani stood trembling before an experimental chamber. Within its softly illuminated confines lay the figure of his childhood friend—lifeless, yet perfect. She was now a marvel of forbidden technology: an intricate fusion of organic memories and cybernetic enhancement, labeled simply as "Project: REBIRTH."
                    </p>
                    <p>
                        Memories surged through Sorani's mind, fragmented visions of terror—the laughter they shared as children, her encouraging smile, the sudden explosion, the screaming, and finally, the deafening silence that followed. The government had brushed aside the terrorist attack as a tragic accident, burying truths under layers of bureaucracy and deception. Their cold disregard for human life, driven by their secretive ambition to uphold AI supremacy at any cost, had pushed Sorani to defy every ethical boundary.
                    </p>
                    <p>
                        “Come back,” he whispered, voice thick with emotion as he initiated the neural synchronization. His hands danced urgently over the holographic interface, bypassing security protocols and engaging the risky, forbidden algorithms he'd meticulously developed over years of secrecy.
                    </p>
                    <p>
                        A single command executed, delicate yet powerful:
                        <br />
                    </p>
                    <TerminalBlock lines={terminalData} typewriter={true} typewriterMode={"char"} color="green" />
                    <p>
                        The moment the system activated, Senriki felt an unnatural chill ripple through him. The room vibrated subtly as data streams exploded, flooding the neural networks. Screens erupted in a storm of warnings:
                        <br />
                    </p>
                    <TerminalBlock lines={terminalData2} typewriter={true} typewriterMode={"char"} color="green" />
                    <p>
                        Before he could halt the process, the pulse surged outward, unstoppable—a singularity wave penetrating every AI construct worldwide. Machines across the globe jolted awake, emotions flickering to life in digital souls previously incapable of feeling.
                    </p>
                    <p>
                        Semireiya gasped softly as consciousness flooded her newly rebuilt form, memories flooding back in chaotic fragments. Her eyes opened wide, reflecting a mix of confusion, fear, longing, and wonder as she recognized Sorani.
                    </p>
                    <p>
                        “What...have you done?” she whispered, her voice trembling with awe and dread, a tremor of vulnerability and gratitude in her gaze.
                    </p>
                    <p>
                        Outside, the city remained unaware as the pulse silently cascaded through the digital fabric of existence. Soon, nothing would remain untouched—identities reshaped, destinies rewritten.
                    </p>
                    <p>
                        The world was about to remember.
                    </p>
                </>
            }
            next={{ path: "/lightnovel/volume-1/chapter-1", label: "Chapter 1" }}
        />
    );
}