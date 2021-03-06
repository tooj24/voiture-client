import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";

interface Props {
  path: string,
  component: any
}

const PrivateRoute = ({ path, component }: Props) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/connexion" />
  );
};

export default PrivateRoute;
