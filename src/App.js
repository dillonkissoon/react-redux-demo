import { Provider } from "react-redux";
import AppRouter from "./app.router";

import configureStore from "./redux/configure.store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
