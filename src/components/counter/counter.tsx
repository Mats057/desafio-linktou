import { useState } from "react";
import "./counter.css";

export const Counter = () => {
  const [count, setCount] = useState(100);
  const [weight, setWeight] = useState(1);

  const incrementar = () => {
    setCount(count + weight);
  };

  const decrementar = () => {
    if (count > 0 && count >= weight) {
      setCount(count - weight);
      return;
    }
    setCount(0);
  };

  const resetar = () => {
    setCount(0);
  };

  return (
    <section className="incrementador">
      <div className="contador">
        <span>{count}</span>
      </div>
      <div className="actions">
        <div className="increment_slider">
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </div>
        <button onClick={incrementar}>Incrementar {weight}</button>
        <button onClick={decrementar}>Decrementar {weight}</button>
        <button onClick={resetar}>Resetar</button>
      </div>
    </section>
  );
};
