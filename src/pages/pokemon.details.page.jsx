import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";
import DefaultAppShell from "../layout/default.shell";
import usePokemon, { PokemonProvider } from "../pokemon/pokemon.hook";
import PokemonSearchForm from "../pokemon/pokemon.search.form";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { lookupPokemonByName } = usePokemon();
  const history = useHistory();
  const location = useLocation();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    if (name) loadPokemon(name);
  }, [name]);

  const loadPokemon = async (name) => {
    try {
      const response = await lookupPokemonByName(name);
      setPokemon(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onPokemonSearch = ({ name }) => {
    history.push(`${location.pathname}/${name}`);
  };

  return (
    <>
      <PokemonProvider>
        <DefaultAppShell>
          <Container>
            {(!pokemon || !name) && (
              <>
                <PokemonSearchForm handleSearch={onPokemonSearch} />
              </>
            )}
            {pokemon && name && (
              <>
                <h1>Details for {pokemon.name}</h1>
                <img
                  src={pokemon.sprites.front_default}
                  alt={`image of ${pokemon.name}`}
                />
              </>
            )}
          </Container>
        </DefaultAppShell>
      </PokemonProvider>
    </>
  );
};

export default PokemonDetailsPage;
