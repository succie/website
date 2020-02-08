import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { store } from './store';
import App from './components/App';
import './index.css';

library.add(faUser, faLink, faEnvelope, faTwitter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
