import React, { useEffect } from "react";
import usePokemon from "../pokemon/pokemon.hook";

const PokemonPage = () => {
  const { getPokemonForList } = usePokemon();

  useEffect(() => {
    getPokemonForList();
  }, []);

  return <h1>Pokemon Page</h1>;
};

export default PokemonPage;
