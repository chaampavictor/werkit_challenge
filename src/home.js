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

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
