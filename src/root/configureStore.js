import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import { loadState } from "./localStorage";
import sagas from "./sagas";

const loggerMiddleware = createLogger();
const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware({});

export default function configureStore(history) {
  let store;

  if (process.env.NODE_ENV !== "development") {
    const middleware = [sagaMiddleware, routerMiddleware(history)];

    store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(...middleware)
    );
  } else {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middleware = [
      loggerMiddleware,
      sagaMiddleware,
      routerMiddleware(history)
    ];

    const enhancer = composeEnhancers(applyMiddleware(...middleware));

    store = createStore(rootReducer, persistedState, enhancer);
  }

  sagaMiddleware.run(sagas, store.dispatch);

  return store;
}
