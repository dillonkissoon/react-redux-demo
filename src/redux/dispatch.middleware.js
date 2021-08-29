const dispatchMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    try {
      return next(action);
    } catch (error) {
      // do anything with the error
      console.log({ error, state: getState() });
    }
  };

export default dispatchMiddleware;
