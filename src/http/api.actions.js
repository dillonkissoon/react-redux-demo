import { createAction } from "@reduxjs/toolkit";

// Create names for API actions that our middleware can pickup on dispatch
export const apiCallBegan = createAction("api/requestBegan");
export const apiCallComplete = createAction("api/requestComplete");
export const apiCallFailed = createAction("api/requestFailed");
