import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./MyProfile";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <br />
        <Link to="/profile">My Profile</Link>
        <br />
        <Link to="/about">About Us</Link>
        <br />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
