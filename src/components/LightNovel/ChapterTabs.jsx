import { useState } from "react";

/**
 * ChapterTabs
 * Shows a tab interface for chapter text and an optional illustration (image URL or JSX).
 *
 * @param {JSX.Element} textContent - The main chapter text/content.
 * @param {string|JSX.Element} illustration - Image URL or custom JSX.
 * @param {string} illustrationLabel - Tab label for the illustration (default: 'Illustration').
 */
export default function ChapterTabs({ textContent, illustration, illustrationLabel = "Illustration" }) {
    const [tab, setTab] = useState("text");
    const hasIllustration = !!illustration;

    return (
        <div className="chapter-tabs">
            <div className="nav nav-tabs mb-3" role="tablist">
                <button
                    className={`nav-link${tab === "text" ? " active" : ""}`}
                    onClick={() => setTab("text")}
                    type="button"
                    role="tab"
                >
                    Text
                </button>
                {hasIllustration && (
                    <button
                        className={`nav-link${tab === "illustration" ? " active" : ""}`}
                        onClick={() => setTab("illustration")}
                        type="button"
                        role="tab"
                    >
                        {illustrationLabel}
                    </button>
                )}
            </div>
            <div>
                {tab === "text" && 
                <article
                    style={{
                        lineHeight: "1.8",
                        color: "#ccc",
                        fontSize: "1rem",
                        marginTop: "1.5rem",
                    }}
                >
                    {textContent}
                </article>
                }
                {tab === "illustration" && hasIllustration && (
                    <div className="chapter-illustration text-center">
                        {typeof illustration === "string" ? (
                            <img
                                src={illustration}
                                alt={illustrationLabel}
                                className="chapter-art-img"
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "70vh",
                                    borderRadius: "1em",
                                    boxShadow: "0 0 18px #00fff788",
                                    margin: "0 auto",
                                    display: "block",
                                }}
                            />
                        ) : (
                            illustration
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
