import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import * as allCovidDataReducer from "../shells/reducers";
import * as loginReducer from "../shells/Login/reducers";

const appReducer = combineReducers({
  routing: routerReducer,
  ...allCovidDataReducer,
  ...loginReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
