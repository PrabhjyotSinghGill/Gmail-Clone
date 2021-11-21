import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <div className="app__body">
        <Sidebar></Sidebar>
        <Switch>
          
        </Switch>
        </div>
      </div>
    </Router> 
  );
}

export default App;
