import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../components/App';

import configStore from '../store/configStore';

// change in the ejs sets the initialData to the window, so we can read it from here.
const store = configStore(window.initialData);

// compare it with existing content and re-hydrate it
ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
