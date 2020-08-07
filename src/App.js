import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import SignIn from "./SignIn";
import UserProvider from "./providers/UserProvider";
import Application from "./Application";

function App() {
  return (
    // <Router>
    <UserProvider>
      <Application />
    </UserProvider>
    // </Router>
  );
}

export default App;
