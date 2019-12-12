import React from "react";
import ReactDOM from "react-dom";
import { Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";

import rootReducer from "./modules/reducer";
import MainPage from "./container/MainPage";

export const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

const App = () => <Provider store={store}>
  <MainPage/>
</Provider>;

ReactDOM.render(<App />, document.getElementById("app"));
