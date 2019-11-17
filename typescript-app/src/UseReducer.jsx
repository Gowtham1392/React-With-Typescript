import React from "react";

export const UseReducer = () => {
  const fun = (val, action) => {
    if (action === "ADD") {
      return val + 1;
    }
    if (action === "SUB") {
      return val - 1;
    }
    if (action === "RES") {
      return (val = 0);
    }
    return val;
  };
  const [count, setCount] = React.useReducer(fun, 0);
  return (
    <>
      <div>
        <button onClick={() => setCount("ADD")}>+</button>
        <button onClick={() => setCount("SUB")}>-</button>
        <button onClick={() => setCount("RES")}>Reset</button>
      </div>
      <div>{count}</div>
    </>
  );
};
