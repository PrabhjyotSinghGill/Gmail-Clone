import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Mail from "./components/Mail.jsx";
import EmailList from "./components/EmailList.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <div className="app__body">
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/mail">
              <Mail></Mail>
            </Route>
            <Route path="/">
              <EmailList></EmailList>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
