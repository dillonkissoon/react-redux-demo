import { createContext, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getPokemonByName as searchByName,
  pokemon as pokemonInGlobalState,
  getPokemonList,
  pokemonList as creatures,
} from "./pokemon.store";

const pokemonContext = createContext();

export const usePokemonContext = () => {
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
  const pokemonList = useSelector(creatures);

  const getPokemonForList = async (limit) => {
    dispatch(getPokemonList(limit));
  };

  const lookupPokemonByName = async (pokemon) => {
    try {
      const response = await dispatch(searchByName(pokemon));
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    pokemon,
    lookupPokemonByName,
    getPokemonForList,
    pokemonList,
  };
};

export default usePokemon;
