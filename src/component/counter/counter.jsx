import { useState } from "react";
import CounterAction from "./counterAction";
import "./style.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <div class="card myCard justify-content-center">
          <h5 class="card-title">{counter}</h5>
          <CounterAction incrementFun={increment} decrementFun={decrement} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
