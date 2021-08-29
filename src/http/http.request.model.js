import BaseModel from "./../models/base.model";

/**
 * @class HttpRequestConfig
 * @description HTTP request configuration options
 * @param {object} options - object passed to Class
 * @property { string } options.url - URI for HTTP request
 * @property {object} options.data - HTTP request payload
 * @property { string } options.method - HTTP request method type
 * @property {string} options.onSuccess - redux action to pass response from HTTP request
 * @property {boolean} options.showLoader - display default loading animation on HTTP request
 * @property {string} options.onStart - redux action to run onStart of HTTP request
 * @property {any} options.onStartPayload - redux action payload for onStart action
 * @property {string} options.onError - redux action to run on Error of HTTP request
 * @property {object} options.header - specific headers to add to HTTP request
 * @property {string} options.networkRequestFeedback - feedback to the screen for HTTP request running
 */
export class HttpRequestConfig extends BaseModel {
  constructor({
    url = null,
    data,
    onStart,
    onStartPayload = {},
    onSuccess,
    onError,
    showLoader = false, // allow the specific HTTP request to determine if to display the default loader
    method = "get",
    headers = {},
    networkRequestFeedback = true, // by default provide feedback to user HTTP request is running
  }) {
    this.data = data;
    this.headers = headers;
    this.method = method;
    this.onError = onError;
    this.onStart = onStart;
    this.onStartPayload = onStartPayload;
    this.onSuccess = onSuccess;
    this.showLoader = showLoader;
    this.url = url;
    this.networkRequestFeedback = networkRequestFeedback;
  }
}
