import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import { Provider } from "react-redux";
// import "./index.css";
import App from "../components/App";
import configStore from "../store/configStore";

export default async () => {
  const response = await axios.get("https://bakesaleforgood.com/api/deals");
  const store = configStore({ deals: response.data });

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    ),
    // expose the data to the client, so we don't need to make the axios call on the client again
    initialData: { deals: response.data }
  };
};
