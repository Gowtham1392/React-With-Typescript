import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Todo from "./TodoApp";
import { Parent, Child } from "./ReactContext";

//ReactDOM.render(<Todo />, document.getElementById("root"));

ReactDOM.render(
  <Parent>
    <Child />
  </Parent>,
  document.getElementById("root")
);
