import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import throttle from "lodash/throttle";
import configureStore from "./configureStore";
import { saveState } from "./localStorage";
import history from "./history";
import DashHeader from "../shells/index";
import Login from "../shells/Login";
import SignUp from "../shells/Login/signup";
import VaccineTracker from "../shells/Vaccine/index";
import CountryData from "../shells/CountryData/index";
import Prasen from "../shells/Prasen";

const store = configureStore(history);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/prasen" component={Prasen} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/home" component={DashHeader} />
        <Route path="/vaccine" component={VaccineTracker} />
        <Route path="/country" component={CountryData} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
