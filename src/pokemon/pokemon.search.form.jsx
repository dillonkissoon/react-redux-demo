import React, { useEffect, useState } from "react";
import { defaultFormSettings } from "../components/shared/form/form.util";
import { useForm, FormProvider } from "react-hook-form";
import { Row, Form, Col, Alert } from "react-bootstrap";

import Input from "../components/shared/form/formFields/input";
import Button from "./../components/shared/form/formFields/button.component";
import { usePokemonContext } from "./pokemon.hook";
import FormButton from "./../components/shared/form/formFields/submit.button";

const PokemonSearchForm = ({ handleSearch }) => {
  const methods = useForm({
    ...defaultFormSettings,
    defaultValues: {
      pokemon: "",
    },
  });

  const { handleSubmit, register } = methods;
  const { lookupPokemonByName } = usePokemonContext();
  const [searchResponse, setSearchResponse] = useState(null);
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    // run the handler after the search completes && there's no error
    if (!searchError && searchResponse) handleSearch(searchResponse);
  }, [searchError, searchResponse]);

  /**
   *  @function searchPokemon
   * @description find a pokemon by name
   */
  const searchPokemon = async ({ pokemon }) => {
    try {
      setSearchResponse(null);
      setSearchError(null);
      const response = await lookupPokemonByName(pokemon);
      setSearchResponse(response);
    } catch (error) {
      setSearchError(error.message);
    }
  };

  return (
    <>
      {searchError != null && <Alert variant="danger">{searchError}</Alert>}
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
              <FormButton className="d-grid" type="submit">
                Search
              </FormButton>
            </Col>
          </Row>
        </Form>
      </FormProvider>
    </>
  );
};

export default PokemonSearchForm;
