import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./services-worker/serviceWorker";

const config = {
  dateTimeFormat: "DD/MM/YYYY HH:mm",
  utcDateTimeFormat: "YYYY-MM-DD[T]HH:mm:ss",
  recieptDateFormat: "DD-MM-YYYY/ hh:mm A",
  swChangeDetectName: "__reload_for_sw",
  isProduction: process.env.NODE_ENV === "production",
};

const render = () => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root")
  );
};

render();
const onServiceWorkerUpdate = () => {
  // @ts-ignore
  window[config.swChangeDetectName] = true;
  render();
};

if (config.isProduction) {
  serviceWorker.register({
    onUpdate: onServiceWorkerUpdate,
    onSuccess: onServiceWorkerUpdate,
  });
}
