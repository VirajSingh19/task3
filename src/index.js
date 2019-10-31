import React from "react";
import ReactDOM from 'react-dom';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './components/App';
import roootRecucers from "./reducers";


const store = createStore(
    roootRecucers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );