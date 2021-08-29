import PokemonPage from "./pokemon.page";
import PokemonDetailsPage from './pokemon.details.page';

export const ApplicationPath = "";

export default [
  {
    path: ["/", "/home"],
    component: PokemonPage,
  },
  {
    path: ['/pokemon/:name'],
    component: PokemonDetailsPage
  }
];
