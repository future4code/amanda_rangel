import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./auth";
import {feed} from "./feed";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    feed,

});
