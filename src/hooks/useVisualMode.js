import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(change, replace = false) {
    if (!replace) {
      setHistory((prev) => [...prev, change]);
    }
    setHistory((prev) => [...prev.slice(0, -1), change]);
    setMode(change);
  }

  function back() {
    if (history.length === 1) {
      return;
    }

    setHistory((prev) => {
      const newHistory = [...prev].slice(0, -1);
      const lastMode = newHistory.slice(-1)[0];
      setMode(lastMode);
      return newHistory;
    });
  }

  return { mode, transition, back };
}
