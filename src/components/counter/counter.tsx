import { useEffect, useState } from "react";
import "./counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(1);

  useEffect(() => {
    if(localStorage.getItem('count')){
      setCount(parseInt(localStorage.getItem('count') || '0'));
    }

    if(localStorage.getItem('weight')){
      setWeight(parseInt(localStorage.getItem('weight') || '1'));
    }
  }, []);

  const handleWeight = (value: number) => {
    localStorage.setItem('weight', value.toString());
    setWeight(value);
  };

  const incrementar = () => {
    localStorage.setItem('count', (count + weight).toString());
    setCount(count + weight);
  };

  const decrementar = () => {
    if (count > 0 && count >= weight) {
      localStorage.setItem('count', (count - weight).toString());
      setCount(count - weight);
      return;
    }
    setCount(0);
  };

  const resetar = () => {
    localStorage.setItem('count', '0'); 
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
            onChange={(e) => handleWeight(parseInt(e.target.value))}
          />
        </div>
        <button onClick={incrementar}>Incrementar {weight}</button>
        <button onClick={decrementar}>Decrementar {weight}</button>
        <button onClick={resetar}>Resetar</button>
      </div>
    </section>
  );
};
