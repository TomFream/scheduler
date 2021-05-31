import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(change, replace = false) {
    if (replace) {
      const newHistory = history;
      newHistory.pop();
      setHistory([...newHistory, change]);
    } else {
      setHistory((prev) => [...prev, change]);
    }
    setMode(change);
  }

  function back() {
    if (history.length === 1) {
      return;
    }
    const newHistory = history;
    newHistory.pop();
    setMode(newHistory.slice(-1)[0]);
  }

  return { mode, transition, back };
}
