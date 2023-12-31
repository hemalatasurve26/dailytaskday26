import "./App.css";
import Home from "./componants/Home";
// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./componants/Add.jsx";
import Edit from "./componants/Edit.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Add />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
