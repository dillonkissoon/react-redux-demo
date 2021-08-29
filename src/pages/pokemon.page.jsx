import React, { useEffect } from "react";
import Button from "../components/shared/form/formFields/button.component";
import usePokemon from "../pokemon/pokemon.hook";
import DefaultAppShell from "../layout/default.shell";
import {Container} from 'react-bootstrap'


const PokemonPage = () => {
  const { getPokemonForList, pokemonList } = usePokemon();

  useEffect(() => {
    // react component mounted
    getPokemonForList();
  }, []);

  return (
    <>
    <DefaultAppShell>
      <Container>
        <h1>Pokemon Page</h1>
        {pokemonList.map(({name}) => {
          return <p>{name}</p>
        })}
      </Container>
    </DefaultAppShell>
    </>
  );
};

export default PokemonPage;
