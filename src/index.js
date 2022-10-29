import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/Home';
import Global from './styles/global';

import {PatientsProvider} from './hooks/usePatients';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <PatientsProvider>
      <App />
    </PatientsProvider>
  </React.StrictMode>
);
