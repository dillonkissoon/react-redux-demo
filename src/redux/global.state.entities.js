import { combineReducers } from "redux";
import viewReducer from "../view-settings/view.store";

/**
 * Make all the reducers available to your entire application
 */
export default combineReducers({
  view: viewReducer,
});
