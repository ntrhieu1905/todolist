import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  rootElement
);
