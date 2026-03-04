import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(null);

  const interval = () => {
    if (id) return;
    const timerId = setInterval(() => {
      setCount((prev) => {
        if (prev < 10) {
          return prev + 1;
        }
        clearInterval(timerId);
        return prev;
      });
    }, 1000);
    setId(timerId);
  };

  return (
    <div className="flex justify-center mt-50">
      <div className="flex gap-3">
        <h1 className="border px-2">{count}</h1>
        <button className="border px-2" onClick={interval}>
          Start
        </button>
        <button
          className="border px-2"
          onClick={() => {
            clearInterval(id);
            setId(null);
          }}
        >
          Stop
        </button>

        <button
          className="border px-2"
          onClick={() => {
            setCount(0);
            clearInterval(id);
            setId(null);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
