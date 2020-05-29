import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createGlobalStyle } from 'styled-components';
import App from './App';

import * as serviceWorker from './serviceWorker';
import reducer from './reducers/Combine';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 400; 
  }
  body {
    padding: 0;
    margin: 0; 
  }
  h2{
    padding: 0;
    margin: 0; 
  }
  ul {
    padding: 0;
    margin: 0; 
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  textarea{
    min-height: 150px;
  }
  a:visited {
    color: none;
  }
`;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
