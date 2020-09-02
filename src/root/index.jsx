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
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/countries" component={DashHeader} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
