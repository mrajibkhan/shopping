import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import store from "./js/store/appStore";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
