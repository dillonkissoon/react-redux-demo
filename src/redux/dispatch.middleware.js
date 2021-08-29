const dispatchMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    try {
      console.log(
        `dispatch middleware called for every action, current dispatched redux action: ${action.type}`
      );
      return next(action);
    } catch (error) {
      // do anything with the error
      console.log({ error, state: getState() });
    }
  };

export default dispatchMiddleware;
