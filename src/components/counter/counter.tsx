import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={resetar}>Resetar</button>
      </div>
    </section>
  );
};
