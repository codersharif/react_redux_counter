const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="flex flex-col gap-2 w-2/12">
      <div className="text-black text-center">{count}</div>
      <div className="grid grid-cols-2 gap-6">
        <button
          onClick={onIncrement}
          className="p-1 border border-green-500 bg-black text-white"
        >
          Increment
        </button>
        <button
          onClick={onDecrement}
          className="p-1 border border-green-500 bg-red-900 text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
