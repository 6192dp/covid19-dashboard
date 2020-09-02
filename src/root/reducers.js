import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import * as allCovidDataReducer from "../shells/reducers";

const appReducer = combineReducers({
  routing: routerReducer,
  ...allCovidDataReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
