import { hot } from "react-hot-loader";
import React from "react";
import Loadable from "react-loadable";
import { Router } from "@reach/router";

const Loading = () => {
  return <h1>Loading...</h1>;
};

const AsyncConnectedExample = Loadable({
  loader: () => import("./components/ConnectedExample"),
  loading: Loading,
});

const AsyncExample = Loadable({
  loader: () => import("./components/Example"),
  loading: Loading,
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <AsyncExample path="/" />
          <AsyncConnectedExample path="connected-example" />
        </Router>
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
