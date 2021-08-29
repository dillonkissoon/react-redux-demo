import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./../http/api.actions";
import { HttpRequestConfig } from "./../http/http.request.model";

const initialState = {
  creatures: [],
};

const slice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    savePokemon: (state, action) => {
      state.creatures.push(action.payload);
    },
  },
});

const { savePokemon } = slice.actions;

export default slice.reducer;

export const getPokemonList = (pageNumber) => (dispatch, getState) => {
  const reqConfig = new HttpRequestConfig({
    url: `/pokemon?limit=500&offset=500`,
  }).toJSON();
  dispatch(apiCallBegan(reqConfig));
};

/**
 * @function getPokemonByName
 * @description search for a pokemon by Name
 * @param {string} name - a name or id is valid
 * @returns {object}
 */
export const getPokemonByName = (name) => async (dispatch, getState) => {
  try {
    const pokemon = await dispatch(getPokemon(name, "name"));
    return pokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 *
 * @param {string} value - id or name search param
 * @param {string} key - search by id or name
 * @returns {object}
 */
const getPokemon = (value, key) => async (dispatch, getState) => {
  try {
    const { creatures } = getState().entities.pokemon;

    // search for the pokemon in state
    const found = creatures.find((pokemon) => pokemon[key] == value);

    // don't make an API request if the pokemon exists in state
    if (found) return found;
    const requestConfig = new HttpRequestConfig({
      url: `/pokemon/${value}`,
      onSuccess: savePokemon.type,
    }).toJSON();
    // call the pokemon API to get the cahracter data
    return dispatch(apiCallBegan(requestConfig));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const pokemon = createSelector(
  (state) => state.entities.pokemon,
  (pokemon) => pokemon.creatures
);
