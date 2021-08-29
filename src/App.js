import { Provider } from "react-redux";
import PokemonSearchForm from "./pokemon/pokemon.search.form";

import configureStore from "./redux/configure.store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PokemonSearchForm />
    </Provider>
  );
}

export default App;
