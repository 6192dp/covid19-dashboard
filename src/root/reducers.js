import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import * as allCovidDataReducer from "../shells/reducers";
import * as loginReducer from "../shells/Login/reducers";
import * as vaccinerReducer from "../shells/Vaccine/reducers";

const appReducer = combineReducers({
  routing: routerReducer,
  ...allCovidDataReducer,
  ...loginReducer,
  ...vaccinerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
