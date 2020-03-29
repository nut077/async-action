import { getToken } from "../lib";
import { RSAA } from "redux-api-middleware";

export default store => next => action => {
  let headers = action[RSAA]["headers"];
  if (typeof headers === "undefined") {
    next(action);
  } else {
    action[RSAA]["headers"] = { ...headers, Authorization: getToken() };
    next(action);
  }
};
