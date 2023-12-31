import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './components/reducer';

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </React.StrictMode>,
  documen.getElementById('root')
);