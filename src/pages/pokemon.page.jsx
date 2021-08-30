import React, { useEffect } from "react";
import Button from "../components/shared/form/formFields/button.component";
import usePokemon, { PokemonProvider } from "../pokemon/pokemon.hook";
import DefaultAppShell from "../layout/default.shell";
import { Container, Table } from "react-bootstrap";
import PokemonSearchForm from "../pokemon/pokemon.search.form";
import { useHistory } from "react-router";

const PokemonPage = () => {
  const { getPokemonForList, pokemonList, lookupPokemonByName, searchError } =
    usePokemon();
  const history = useHistory();

  useEffect(() => {
    // react component mounted
    getPokemonForList();
  }, []);

  const viewPokemonDetails = (name) => {
    try {
      if (!name) throw new Error("invalid action missing name");
      history.push(`/pokemon/${name}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const onPokemonSearch = (pokemon) => {
    const { name } = pokemon;
    viewPokemonDetails(name);
  };

  return (
    <>
      <PokemonProvider>
        <DefaultAppShell>
          <Container>
            <h3>Search For a Pokemon</h3>
            <PokemonSearchForm handleSearch={onPokemonSearch} />
            <hr />
            <h3>Pokemon List</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Pokemon</th>
                </tr>
              </thead>
              <tbody>
                {pokemonList.map(({ name }) => {
                  return (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>
                        <Button onClick={() => viewPokemonDetails(name)}>
                          View Details
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </DefaultAppShell>
      </PokemonProvider>
    </>
  );
};

export default PokemonPage;
