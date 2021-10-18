function CounterAction(props) {
  return (
    <div>
      <button type="button" className="myButton" onClick={props.incrementFun}>
        +
      </button>
      <button type="button" className="myButton" onClick={props.decrementFun}>
        -
      </button>
    </div>
  );
}

export default CounterAction;
