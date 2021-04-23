import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import * as actions from "../store/actions";
import { connect } from "react-redux";

const ConnectedExample = (props) => {
  function changeGreeting() {
    props.dispatch(actions.updateExampleData({ sayHi: "Bonjour" }));
  }

  return <h1 onClick={() => changeGreeting()}>{props.myData.sayHi}</h1>;
};

const mapStateToProps = (state) => {
  return {
    myData: state.exampleData,
  };
};

export default connect(mapStateToProps)(ConnectedExample);
