import React from "react";

const AuthContext = React.createContext({
  //typically you need to set values for ide completition
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
