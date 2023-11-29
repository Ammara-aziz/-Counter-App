"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="text-center p-20">
      <div>
        <h1 style={{ fontSize: "70px" }}>{count}</h1>
        <div className="d-flex">
          <button
            onClick={handleIncrement}
            className="bg-[rgb(245,98,75)] p-1 rounded-md me-7 "
            style={{ fontSize: "27px" }}
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-green-500 p-1  rounded-md ms-7 "
            style={{ fontSize: "27px" }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
