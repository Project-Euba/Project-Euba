import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { typePolicies } from "./apollo/typepolicy";
import * as serviceWorker from "./serviceWorker";

// Get the loginToken from localStorage
const token = localStorage.getItem("token");

// Apollo Client Setup
const cache = new InMemoryCache({
  typePolicies: typePolicies
});
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  // link: new HttpLink({
  //   uri: "http://localhost:5000/api",
  //   headers: {
  //     authorization: localStorage.getItem("token")
  //   }
  // })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
