import { useEffect, useRef, useState } from "react";

export default function TerminalBlock({
    lines = [],
    prompt = ">>",
    color = "cyan",
    typewriter = true,
    typewriterMode = "char", // "line" or "char"
    copyable = false,
    customStyle = {},
    cursorStyle = {},
}) {
    const [displayLines, setDisplayLines] = useState(typewriter ? [] : lines);
    const [copied, setCopied] = useState(false);
    const [charProgress, setCharProgress] = useState(0); // for char mode
    const [currentLine, setCurrentLine] = useState(0);

    // Color themes
    const colorMap = {
        cyan: "#00fff7",
        green: "#8fff5a",
        blue: "#5abaff",
        red: "#ff4f79",
        magenta: "#c279ff",
        white: "#fafafafa",
        teal: "#2DFFDC",
    };
    const textColor = colorMap[color] || "#00fff7";

    // Typewriter animation logic
    useEffect(() => {
        if (!typewriter) {
            setDisplayLines(lines);
            setCharProgress(0);
            setCurrentLine(0);
            return;
        }

        if (typewriterMode === "char") {
            setDisplayLines([""]);
            setCurrentLine(0);
            setCharProgress(0);

            let charIdx = 0;
            let lineIdx = 0;
            const typeChar = () => {
                if (lineIdx >= lines.length) return;
                const line = lines[lineIdx] || "";
                if (charIdx <= line.length) {
                    setDisplayLines(prev => {
                        const newLines = [...prev];
                        newLines[lineIdx] = line.slice(0, charIdx);
                        return newLines;
                    });
                    charIdx++;
                    setCharProgress(charIdx);
                } else {
                    lineIdx++;
                    charIdx = 0;
                    setDisplayLines(prev => [...prev, ""]);
                    setCurrentLine(lineIdx);
                }
                if (lineIdx < lines.length) {
                    setTimeout(typeChar, 24); // speed per char
                }
            };
            typeChar();
            return () => { }; // No interval to clear
        } else {
            // Default: per line
            setDisplayLines([lines[0] || ""]);
            let idx = 1;
            const interval = setInterval(() => {
                setDisplayLines(prev => [...prev, lines[idx]]);
                idx++;
                if (idx >= lines.length) clearInterval(interval);
            }, 60);
            return () => clearInterval(interval);
        }
    }, [lines, typewriter, typewriterMode]);

    // Copy-to-clipboard
    const handleCopy = () => {
        const text = lines.map(line => `${prompt} ${line}`).join("\n");
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 800);
    };

    // Determine if we are still typing in char mode
    const stillTyping =
        typewriter &&
        typewriterMode === "char" &&
        displayLines.length < lines.length;

    const filteredLines = [...displayLines];
    while (
        filteredLines.length > 1 &&
        filteredLines[filteredLines.length - 1] === ""
    ) {
        filteredLines.pop();
    }


    return (
        <div style={{ position: "relative" }}>
            <pre
                className="terminal-block"
                style={{
                    background: "#111115",
                    color: textColor,
                    fontFamily: "Fira Mono, monospace",
                    fontSize: "1rem",
                    padding: "1.15rem 1rem 1rem 1.6rem",
                    borderLeft: `4px solid ${textColor}`,
                    borderRadius: "8px",
                    overflowX: "auto",
                    marginBottom: "1.5rem",
                    minHeight: "2.5em"
                }}
            >
                {filteredLines.map((line, idx) =>
                    line === "" ? (
                        <div key={idx}>&nbsp;</div>
                    ) : (
                        <div key={idx}>
                            <span style={{ opacity: 0.5, marginRight: 4 }}>{prompt}</span>
                            {line}
                            {typewriter &&
                                typewriterMode === "char" &&
                                idx === filteredLines.length - 1 &&
                                (stillTyping ||
                                    filteredLines[idx].length < (lines[idx] || "").length) && (
                                    <span
                                        className="terminal-cursor"
                                        style={{ color: textColor, marginLeft: 2 }}
                                    >
                                        |
                                    </span>
                                )}
                        </div>
                    )
                )}
                {/* Blinking cursor if nothing yet */}
                {typewriter && filteredLines.length === 0 && (
                    <span className="terminal-cursor" style={{ color: textColor, marginLeft: 2 }}>|</span>
                )}
            </pre>
            {copyable && (
                <button
                    onClick={handleCopy}
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        background: "#222",
                        color: textColor,
                        border: "none",
                        borderRadius: "3px",
                        fontSize: "0.85rem",
                        padding: "2px 10px",
                        cursor: "pointer"
                    }}
                >
                    {copied ? "✓ Copied!" : "Copy"}
                </button>
            )}
        </div>
    );
}
