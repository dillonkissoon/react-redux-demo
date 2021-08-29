// react-hook-forms default settings
export const defaultFormSettings = {
  mode: "onTouched",
  shouldFocusError: true,
};

export const regex = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

export const matches = (value1, value2) => {
  return value1 === value2;
};
