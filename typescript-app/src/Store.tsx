import React from "react";
import { tsPropertySignature } from "@babel/types";

interface IState {
  episodes: [];
  favourites: [];
}
const InitialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState>(InitialState);

function reducer() {}

export function StoreProvider(props: any) {
  return (
    <React.Fragment>
      <Store.Provider value={InitialState}>{props.children}</Store.Provider>
    </React.Fragment>
  );
}
