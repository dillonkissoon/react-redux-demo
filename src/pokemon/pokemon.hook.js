import { createContext, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getPokemonByName as searchByName,
  pokemon as pokemonInGlobalState,
} from "./pokemon.store";

const pokemonContext = createContext();

const usePokemonContect = () => {
  return useContext(pokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const value = usePokemon();
  return (
    <pokemonContext.Provider value={value}>{children}</pokemonContext.Provider>
  );
};

const usePokemon = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(pokemonInGlobalState);

  const lookupPokemonByName = async (pokemon) => {
    try {
      const response = await dispatch(searchByName(pokemon));
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return { pokemon, lookupPokemonByName };
};

export default usePokemon;
