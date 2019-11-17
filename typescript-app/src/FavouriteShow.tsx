import React from "react";
import { Store } from "./Store";

const FavouriteShow = (): JSX.Element => {
  const store = React.useContext(Store);
  console.log(store);
  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
    </React.Fragment>
  );
};

export default FavouriteShow;
