import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamationTriangle, faCoffee);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


