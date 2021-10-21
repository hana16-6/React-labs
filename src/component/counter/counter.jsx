import { useSelector } from "react-redux";
import CounterAction from "./counterAction";
import { useDispatch } from "react-redux";
import {
  incrementCounterAction,
  decrementCounterAction,
} from "../../redux/counter";
import "./style.css";

function Counter() {
  const counterState = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCounterAction(1));
  };
  const decrement = () => {
    if (counterState > 0) {
      dispatch(decrementCounterAction(1));
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center my-5">
        <div className="card myCard justify-content-center">
          <h5 className="card-title">{counterState}</h5>
          <CounterAction incrementFun={increment} decrementFun={decrement} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
