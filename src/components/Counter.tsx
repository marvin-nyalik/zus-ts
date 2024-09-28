import { useCounterStore } from "../store/CounterStore";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
