import HTTPClient from "../http/http.client";
import { updateHTTPState } from "../view-settings/view.store";
import {
  apiCallBegan,
  apiCallComplete,
  apiCallFailed,
} from "./../http/api.actions";

export default ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    // check that the action dispached to redux is for api request otherwise pass action to next redux middlewate
    if (action.type !== apiCallBegan.type) return next(action);

    // values from HTTP config
    const {
      data,
      headers,
      method,
      onError,
      onStart,
      onStartPayload,
      onSuccess,
      showLoader,
      url,
      networkRequestFeedback,
    } = action.payload;

    try {
      // run any speciifc onStart redux action for this API request
      if (onStart) dispatch({ type: onStart, payload: { ...onStartPayload } });
      // pass action down across redux middlewares
      next(action);

      // const credentials = false;
      dispatch(updateHTTPState(networkRequestFeedback));

      // make HTTP request using Axios client
      const response = await HTTPClient.request({
        url,
        method,
        data,
        headers,
        // credentials,
      });

      // general redjux action on HTTP success for application
      dispatch(apiCallComplete({ url }));

      // required redux action to set response data in redux global state
      if (onSuccess)
        await dispatch({ type: onSuccess, payload: response.data });

      // always return the request response to the redux action creator
      return response.data;
    } catch (error) {
      // error response obj from axios
      const { message, response } = error;
      const responseToPassToAction = JSON.stringify(response);

      // default redux action application API error handler
      dispatch(
        apiCallFailed({ message, response: JSON.parse(responseToPassToAction) })
      );

      // if specific onError defined from action creator
      if (onError)
        dispatch({
          type: onError,
          payload: { message, response: JSON.parse(responseToPassToAction) },
        });

      switch (response.status) {
        case 400:
          console.log("TODO: application wide handle 400 bad request");
          break;
        case 401:
          console.log("TOOD: application wide handle 401 unautorized request");
          break;
        case 404:
          console.log("TODO: application wide handle 404 not found request");
          throw new Error(error.message);
        case 500:
          console.log("TODO: application wide handle server error");
          break;
        default:
          throw new Error(error.message);
      }
    } finally {
      // close all loaders and reset feedback to the screen
      dispatch(updateHTTPState(false));
    }
  };
