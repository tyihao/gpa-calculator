import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import "antd/dist/antd.css";
import "antd/dist/antd.less";
import { Provider } from "react-redux";
import App from "@/modules/App";
// HighchartsCSS
import "handsontable/dist/handsontable.full.css";
// Redux Store
import store from "./feature/store";

document.title = `GPA Calculator`;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
