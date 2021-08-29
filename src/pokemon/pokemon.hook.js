import { createContext, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getPokemonByName as searchByName,
  pokemon as pokemonInGlobalState,
  getPokemonList,
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
  const [searchError, setSearchError] = useState(null);

  const getPokemonForList = async (limit) => {
    dispatch(getPokemonList(limit));
  };

  const lookupPokemonByName = async (pokemon) => {
    try {
      setSearchError(null);
      const response = await dispatch(searchByName(pokemon));
      return response;
    } catch (error) {
      setSearchError(error.message);
    }
  };
  return { pokemon, lookupPokemonByName, searchError, getPokemonForList };
};

export default usePokemon;
