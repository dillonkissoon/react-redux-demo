import { combineReducers } from "redux";
import viewReducer from "../view-settings/view.store";
import pokemonReducer from "../pokemon/pokemon.store";

/**
 * Make all the reducers available to your entire application
 */
export default combineReducers({
  view: viewReducer,
  pokemon: pokemonReducer,
});
