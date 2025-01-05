import { useState, useCallback } from "react";
import "./Spinner.css";

const SPIN_DURATION = 2000; // 2 seconds
const OUTCOMES = ["white ice", "blue ice", "Pick any color", "Skip this turn"];

export function Spinner() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selection, setSelection] = useState(null);

  const spin = useCallback(() => {
    if (isSpinning) return; // Ignore input while spinning

    setIsSpinning(true);

    // Start the spin animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * OUTCOMES.length);
      setSelection(OUTCOMES[randomIndex]);
      setIsSpinning(false);
    }, SPIN_DURATION);
  }, [isSpinning]);

  return (
    <div className="spinner-container">
      <div
        className={`spinner-hex ${isSpinning ? "spinning" : ""}`}
        onClick={spin}
      >
        <div className="spinner-content">
          {isSpinning ? (
            <div className="spinner-text">Spinning...</div>
          ) : (
            <div className="spinner-text">{selection || "Tap to Spin"}</div>
          )}
        </div>
      </div>
    </div>
  );
}
