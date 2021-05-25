import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const render = () => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root")
  );
};

render();
const onServiceWorkerUpdate = (): void => {
  render();
};

if (process.env.NODE_ENV) {
  serviceWorkerRegistration.register({
    onSuccess: onServiceWorkerUpdate,
    onUpdate: onServiceWorkerUpdate,
  });
serviceWorkerRegistration.register();
reportWebVitals();
