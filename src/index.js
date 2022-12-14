import React from 'react';
import ReactDOM from 'react-dom/client';

import {Router} from './routes/routes';

import Global from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <Router />
  </React.StrictMode>
);
