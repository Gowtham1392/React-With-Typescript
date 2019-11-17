import React from "react";
import { Store } from "./Store";
import { IAction, IEpisode } from "./interfaces";

const FavouriteShow = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });
  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJson._embedded.episodes
    });
  };
  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: any) => fav.id != episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      };
    }
    return dispatch(dispatchObj);
  };
  console.log("fav=>", state);
  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <section>Favourites: {state.favourites.length}</section>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <div>
                {/* <img src={episode.image.medium} /> */}
                <div>{episode.name}</div>
                <section>
                  <div>
                    Season: {episode.season} Number: {episode.number}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        toggleFavAction(episode);
                      }}
                    >
                      {state.favourites.find(
                        (fav: IEpisode) => fav.id === episode.id
                      )
                        ? "Remove Fav"
                        : "Add to Fav"}
                    </button>
                  </div>
                </section>
              </div>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default FavouriteShow;
