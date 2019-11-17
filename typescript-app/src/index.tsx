import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
//import Todo from "./TodoApp";
//import { Parent, Child } from "./ReactContext";
import FavouriteShow from "./FavouriteShow";
import { StoreProvider } from "./Store";
import { UseReducer } from "./UseReducer";

// ReactDOM.render(
//   <StoreProvider>
//     <FavouriteShow />
//   </StoreProvider>,
//   document.getElementById("root")
// );

ReactDOM.render(<UseReducer />, document.getElementById("root"));
