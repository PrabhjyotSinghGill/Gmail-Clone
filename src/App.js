import React from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
