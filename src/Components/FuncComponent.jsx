import { useState } from "react";

const FuncComponent = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Function Component</p>
      <p>{contador}</p>
      <span>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </span>
    </div>
  );
};

export default FuncComponent;
