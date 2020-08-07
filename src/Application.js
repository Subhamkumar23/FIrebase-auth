import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import UserProvider from "./providers/UserProvider";

function Application() {
  const user = useContext(UserProvider);

  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={SignIn} />
      <Route path="/passwordReset" component={PasswordReset} />
    </Router>
  );
}
export default Application;
