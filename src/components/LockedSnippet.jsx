import { useState } from "react";

export default function LockedSnippet({ title = "Restricted Info", children }) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const correctCode = import.meta.env.VITE_PATREON_KEY;

  const unlock = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === correctCode) {
      setShow(true);
    } else {
      alert("Access denied. Invalid code.");
    }
  };

  return (
    <div className="border border-warning rounded p-3 bg-dark text-light mb-3">
      <h6 className="text-warning mb-2">{title}</h6>
      {show ? (
        <div>{children}</div>
      ) : (
        <form onSubmit={unlock} className="d-flex flex-column">
          <small>This section contains exclusive content.</small>
          <input
            type="text"
            className="form-control my-2"
            placeholder="Enter unlock code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-warning btn-sm">
            Unlock Info
          </button>
        </form>
      )}
    </div>
  );
}
