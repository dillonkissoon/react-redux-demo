import React, { useEffect } from "react";
import Button from "../components/shared/form/formFields/button.component";
import usePokemon from "../pokemon/pokemon.hook";

const PokemonPage = () => {
  const { getPokemonForList } = usePokemon();

  useEffect(() => {
    getPokemonForList();
  }, []);

  return (
    <>
      <h1>Pokemon Page</h1>;
      <Button onClick={() => getPokemonForList(100)}>Get More Pokemon</Button>
    </>
  );
};

export default PokemonPage;
