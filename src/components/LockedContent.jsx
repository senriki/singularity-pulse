import { useState } from "react";

export default function LockedContent({ title = "Exclusive Content", children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");

  const correctCode = "pulsecode2025"; // <- Replace this as needed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === correctCode) {
      setUnlocked(true);
    } else {
      alert("Access denied. Wrong code.");
    }
  };

  return (
    <div className="bg-dark text-light p-4 rounded shadow mt-4 border border-info">
      <h4 className="text-info mb-3">{title}</h4>
      {unlocked ? (
        <div>{children}</div>
      ) : (
        <>
          <p>This content is for supporters only.</p>
          <a
            href="https://www.patreon.com/SenrikiSorani"
            className="btn btn-danger mb-3"
            target="_blank"
            rel="noreferrer"
          >
            Join on Patreon
          </a>

          <form onSubmit={handleSubmit} className="mt-3">
            <label htmlFor="code">Have a code?</label>
            <input
              type="text"
              id="code"
              className="form-control my-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter access code"
            />
            <button type="submit" className="btn btn-outline-info">
              Unlock
            </button>
          </form>
        </>
      )}
    </div>
  );
}
