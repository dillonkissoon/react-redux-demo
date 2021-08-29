import { Provider } from "react-redux";

import configureStore from "./redux/configure.store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <h1>App Running</h1>
    </Provider>
  );
}

export default App;
