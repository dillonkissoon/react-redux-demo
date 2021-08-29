import React, { useEffect } from "react";
import Button from "../components/shared/form/formFields/button.component";
import usePokemon from "../pokemon/pokemon.hook";
import DefaultAppShell from "../layout/default.shell";
import {Container, Table} from 'react-bootstrap'


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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    Pokemon
                  </th>
                </tr>
              </thead>
              <tbody>
                {pokemonList.map(({name}) => {
                  return (
                        <tr>
                          <td>{name}</td>
                          <td><Button>View Details</Button></td>
                        </tr>
                  )
                })}
              </tbody>
            </Table>
      </Container>
    </DefaultAppShell>
    </>
  );
};

export default PokemonPage;
