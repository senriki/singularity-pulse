import { useState } from "react";

/**
 * ChapterTabs with flexible illustration sizing.
 * 
 * @param {JSX.Element} textContent
 * @param {string|JSX.Element} illustration
 * @param {string|JSX.Element} translation
 * @param {string} translationLabel
 * @param {string} illustrationLabel
 * @param {string} mobileMaxWidth - e.g. "98vw"
 * @param {string} mobileMaxHeight - e.g. "50vh"
 */
export default function ChapterTabs({
    textContent,
    illustration,
    translation,
    translationLabel = "Translation",
    illustrationLabel = "Illustration",
    mobileMaxWidth = "100vw",
    mobileMaxHeight = "45vh"
}) {
    const [tab, setTab] = useState("text");
    const hasIllustration = !!illustration;
    const hasTranslation = !!translation;

    // Only needed if you want to pass sizing as CSS variables for per-chapter control
    const artImgVars = {
        "--mobile-art-width": mobileMaxWidth,
        "--mobile-art-height": mobileMaxHeight,
    };

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
                {hasTranslation && (
                    <button
                        className={`nav-link${tab === "translation" ? " active" : ""}`}
                        onClick={() => setTab("translation")}
                        type="button"
                        role="tab"
                    >
                        {translationLabel}
                    </button>
                )}
            </div>
            <div>
                {tab === "text" && <div className="chapter-text">{textContent}</div>}
                {tab === "illustration" && hasIllustration && (
                    <div className="chapter-illustration text-center">
                        {typeof illustration === "string" ? (
                            <img
                                src={illustration}
                                alt={illustrationLabel}
                                className="chapter-art-img responsive-art-img"
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    borderRadius: "1em",
                                    boxShadow: "0 0 18px #00fff788",
                                    margin: "0 auto",
                                    display: "block",
                                    ...artImgVars,
                                }}
                            />
                        ) : (
                            illustration
                        )}
                    </div>
                )}
                {tab === "translation" && hasTranslation && (
                    <div className="chapter-translation">{translation}</div>
                )}
            </div>
        </div>
    );
}
