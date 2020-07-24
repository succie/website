import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { createGlobalStyle } from 'styled-components';
import { store } from './store';
import { App } from './App';

library.add(faUser, faLink, faEnvelope, faTwitter);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Sarala', 'Kosugi Maru', sans-serif;
  }

  li {
    text-decoration: none;
  }

  button {
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.querySelector('#root')
);
