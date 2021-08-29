import { configureStore } from "@reduxjs/toolkit";

// All application reducers combined
import reducer from "./reducer";

/**
 * All Middleware registered with redux will run on every dispatch
 * Your the middleware logic determines if it moves onto the next middleware or execute the current middleware
 */
import apiMiddleware from "./api.redux.middleware";
import dispatchMiddleware from "./dispatch.middleware";

const createStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiMiddleware).concat(dispatchMiddleware),
  });

  // hotload code changes into browser without full refresh
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer", () => store.replaceReducer(reducer));
  }

  return store;
};

export default createStore;
