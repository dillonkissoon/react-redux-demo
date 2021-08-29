import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import usePokemon from '../pokemon/pokemon.hook';

const PokemonDetailsPage = () => {
    const { name } = useParams();
    const { lookupPokemonByName } = usePokemon();

    useEffect(() => {
        lookupPokemonByName(name);
    }, [])


    if (!name) return (
        <>Pokemon Search Form</>
    )

    if (name) return (
        <>
            <h1>Pokemon Details Page</h1>
        </> 
    );
}
 
export default PokemonDetailsPage;