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
import Home from "./home";
import Details from "./details";
import Selected from "./selected";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <h4>
              <Link to="/">Home</Link>
            </h4>
            <h4>
              <Link to="/selected">Selected Repositories</Link>
            </h4>
          </ul>
        </nav>
        <Switch>
          {/* <Route exact path={"/login/"} component={Login} /> */}
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/details"} component={Details} />
          <Route exact path={"/selected"} component={Selected} />
        </Switch>
      </div>
    );
  }
}

export default App;
