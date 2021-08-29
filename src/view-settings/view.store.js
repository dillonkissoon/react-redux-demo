import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  networkRequestActive: false,
};

const slice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setNetworkStatus: (state, action) => {
      const { isRunningRequest } = action.payload;
      state.networkRequestActive = isRunningRequest;
    },
  },
});

const { setNetworkStatus } = slice.actions;

export default slice.reducer;

/**
 * @function updateHTTPState
 * @description update state with http request start/end
 */
export const updateHTTPState = (isRunningRequest) => (dispatch, getState) => {
  try {
    dispatch({ type: setNetworkStatus.type, payload: { isRunningRequest } });
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * @name isHTTPRunning
 * @type Boolean
 * @description current value of netwrok request active to update view
 */
export const isHTTPRunning = createSelector(
  (state) => state.entities.view,
  (view) => view.networkRequestActive
);
