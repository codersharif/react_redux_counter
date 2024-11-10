import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrement, increment } from "../features/counter/counterSlice";

export default function CounterOne() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce(
    (totalSum, current) => totalSum + current.value,
    0
  );

  console.log(totalCount);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };
  return (
    <div>
      {counters.map((count) => (
        <Counter
          key={count.id}
          count={count.value}
          onIncrement={() => handleIncrement(count.id)}
          onDecrement={() => handleDecrement(count.id)}
        />
      ))}

      <div className="flex flex-col gap-2 w-2/12">
        <h2>Total Count: {totalCount}</h2>
      </div>
    </div>
  );
}
