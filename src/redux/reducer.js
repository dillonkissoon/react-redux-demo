import { combineReducers } from "redux";
import entitiesReducer from "./global.state.entities";

const appReducer = combineReducers({
  entities: entitiesReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
