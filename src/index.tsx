/**
 * Importing npm packages.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Importing the user defined packages.
 */
import App from './components/app/App';

/**
 * Importing the global css.
 */
import 'antd/dist/antd.dark.css';
// import 'antd/dist/antd.css';
import './assets/css/utilities.css';
import './assets/css/grid.css';

/**
 * Rendering the react app.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
