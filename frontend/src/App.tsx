import React from 'react';
import './main.global.css';
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import MainPage from './pages/mainPage/MainPage';
import {rootReducer} from './store/reducer';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const middleware = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default function AppComponent() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
