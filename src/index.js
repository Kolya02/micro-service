import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reducers from './redux/reducers';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
serviceWorker.unregister();
