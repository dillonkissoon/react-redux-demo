import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./../http/api.actions";
import { HttpRequestConfig } from "./../http/http.request.model";

const initialState = {
  creatures: [],
  creatureDetails: [],
  maxCreatureCount: 0,
};

const slice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    savePokemon: (state, action) => {
      const { count, results } = action.payload;
      state.maxCreatureCount = count;

      const pokemonToAdd = results.filter(
        (creature) =>
          state.creatures.find((p) => p.name === creature.name) === undefined
      );

      console.log({ pokemonToAdd });

      state.creatures.push(...pokemonToAdd);
    },
    savePokemonDetails: (state, action) => {
      state.creatureDetails.push(action.payload);
    },
  },
});

const { savePokemon, savePokemonDetails } = slice.actions;

export default slice.reducer;

/**
 * @function getPokemonList
 * @description get a list of pokemon creatures
 * @param {number} limit - number of pokemon to return in response
 * @returns
 */
export const getPokemonList =
  (limit = 50) =>
  (dispatch, getState) => {
    try {
      // setup HTTP request config
      const reqConfig = new HttpRequestConfig({
        url: `/pokemon?limit=${limit}&offset=${limit}`,
        onSuccess: savePokemon.type,
      }).toJSON();

      return dispatch(apiCallBegan(reqConfig));
    } catch (error) {
      throw new Error(error.messsage);
    }
  };

/**
 * @function getPokemonByName
 * @description get details of a pokemon
 * @param {string} name - name of pokemon
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
 * @function getPokemonById
 * @description search for a pokemon by ID
 * @param {string} id - id of pokemon
 * @returns {object}
 */
export const getPokemonById = (id) => async (dispatch, getState) => {
  try {
    const pokemon = await dispatch(getPokemon(id, "id"));
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
    const { creatureDetails } = getState().entities.pokemon;

    // search for the pokemon in state
    const found = creatureDetails.find((pokemon) => pokemon[key] == value);

    // don't make an API request if the pokemon exists in state
    if (found) return found;
    const requestConfig = new HttpRequestConfig({
      url: `/pokemon/${value}`,
      onSuccess: savePokemonDetails.type,
    }).toJSON();
    // call the pokemon API to get the cahracter data
    return dispatch(apiCallBegan(requestConfig));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const pokemon = createSelector(
  (state) => state.entities.pokemon,
  (pokemon) => pokemon.creatureDetails
);

export const pokemonList = createSelector(
  (state) => state.entities.pokemon,
  (pokemon) => pokemon.creatures
);
