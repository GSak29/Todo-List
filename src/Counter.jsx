import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleInc() {
    setCount(count + 1);
  }
  function handleClear() {
    setCount(0);
  }
  function handleDec() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="rounded-md bg-blue-300 w-fit p-4 m-60 shadow-md text-center shadow-gray-600">
        <button
          className="transition-all duration-75 rounded-md text-green-400 active:shadow-md bg-white px-4 m-4"
          onClick={handleInc}
        >
          Increment
        </button>
        <button
          className="transition-all duration-75 rounded-md text-blue-700 active:shadow-md bg-white px-4 m-4"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className=" transition-all duration-75 rounded-md text-red-400 active:shadow-md bg-white px-4 m-4"
          onClick={  handleDec}
        >
          {" "}
          Decrement
        </button>
        <br />
        <h1>
          <strong className="text-zinc-700">{count}</strong>
        </h1>
      </div>
    </>
  );
}
export default Counter;
