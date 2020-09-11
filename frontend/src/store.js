import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import headerReducer from "./common/Header/state/headerReducer";
import productReducer from "./product/state/ProductReducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//combining all the reducer existing
const allReducer = combineReducers({
  header: headerReducer,
  product: productReducer,
});

const store = createStore(
  allReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

//running the saga using saga middleware
sagaMiddleware.run(rootSaga);
export default store;
