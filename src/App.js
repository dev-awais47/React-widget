import React from "react";
import "./App.css";
import Widget from "./components/Widget";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Widget />
    </div>
  );
}

export default App;
