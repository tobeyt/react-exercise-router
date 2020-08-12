import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            {/* <Redirect exact from="/about" to="/1" /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={User} />
            <Route exact path="/:user([0-9]+)" component={User} />
            <Route exact component={NotMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
