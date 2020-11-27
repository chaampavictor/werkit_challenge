import logo from "./logo.svg";
import "./App.css";
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import React, { Component } from "react";

class Selected extends Component {
  render() {
    return (
      <div className="App">
        <h1>Selected page</h1>
      </div>
    );
  }
}

export default Selected;
