import axios from "axios";
import qs from "qs";

/**
 *
 * @description setup axios defaults
 */
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
});

/**
 *
 * @description called before every API request
 */
client.interceptors.request.use(
  (config) => {
    const { credentials, headers } = config;
    // if authed add auth token to header
    if (credentials) {
      return {
        ...config,
        headers: {
          ...headers,
          Authorization: `Bearer ${credentials.access_token}`,
        },
      };
    }

    // return config passed in
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 *
 * @description called after every API request
 *
 */
client.interceptors.response.use((success) => {
  const { data } = success;

  let retval = { ...success };

  if (typeof data === "object" && "Successful" in data) {
    // format response to have Success in data
    data.Success = data.Successful;
    retval = { ...success, data };
  }

  if (typeof data === "object" && "Messages" in data) {
    // format response to have Success in data
    data.Message = data.Messages;

    // @TODO: remove any objects in response message to prevent print on screen can't remove from response Brain using on ASPX
    // ex { Sprint_Coverage: "", ... }

    retval = { ...success, data };
  }

  return retval;
});

export default client;

/**
 *
 * @name transformDataToQuery
 * @description formats a plan JS object into a url encoded string
 * @param { object } data
 */
export const transformDataToQuery = (data) => {
  return qs.stringify(data, { encodeURIComponent: (uri) => uri });
};
