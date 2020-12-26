import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import Echo from "laravel-echo";
import io from "socket.io-client"


const echo = new Echo({
  broadcaster: "socket.io",
  client: io,
  host: "localhost:6001",
  auth: {},
  transports: ["websocket"],
});
echo.channel("plain-message").listen("PlainMessage", (e: any) => {
  console.log(e,"event");
});
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
