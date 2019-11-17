import React from "react";
import { IAction, IState } from "./interfaces";

const InitialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState | any>(InitialState);

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, InitialState);

  return (
    <React.Fragment>
      <Store.Provider value={{ state, dispatch }}>
        {props.children}
      </Store.Provider>
    </React.Fragment>
  );
}
