import React, { useEffect, useState } from "react";
import { defaultFormSettings } from "../components/shared/form/form.util";
import { useForm, FormProvider } from "react-hook-form";
import { Row, Form, Col, Alert } from "react-bootstrap";

import Input from "../components/shared/form/formFields/input";
import Button from "./../components/shared/form/formFields/button.component";
import usePokemon from "./pokemon.hook";

const PokemonSearchForm = () => {
  const methods = useForm({
    ...defaultFormSettings,
    defaultValues: {
      pokemon: "",
    },
  });

  const { handleSubmit, register } = methods;
  const { lookupPokemonByName, searchError } = usePokemon();

  /**
   *  @function searchPokemon
   * @description find a pokemon by name
   */
  const searchPokemon = ({ pokemon }) => {
    // implement lookupPokemonByName on page from pokemon custom react hook
    lookupPokemonByName(pokemon);
  };

  return (
    <>
      {searchError && <Alert variant="danger">{searchError}</Alert>}
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(searchPokemon)}>
          <Row className="align-items-center">
            <Col xs={8}>
              <Input
                name="pokemon"
                id="pokemon-search-by-name"
                label="Search by Pokemon Name"
                register={register("pokemon", {
                  required: {
                    value: true,
                    message: "You must enter a name to search for a pokemon",
                  },
                })}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Button className="d-grid" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </>
  );
};

export default PokemonSearchForm;
