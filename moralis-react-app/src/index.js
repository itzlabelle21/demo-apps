import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const APP_ID = "w5CYNEk0LBdCYIgIEqUm2CZpxImzwlwGmuPR1fEv";
const SERVER_URL = "https://dzdfmwoloqps.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
