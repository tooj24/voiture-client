import React, { useContext, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Field } from '../components/Field';
import authContext from '../context/AuthContext';
import { authService } from '../services/authService';

const LoginPage = ({ history }: RouteComponentProps) => {
  const { setIsAuthenticated } = useContext(authContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  // Gestion des champs
  const handleChange = ({ currentTarget }: any) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
    setError("");
  };

  // soumission du formulaire
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await authService.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
      history.replace('/');
    } catch ({ error }: any) {
      setError("Identifiant invalide")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="row d-flex justify-content-center">
      <div className="col-md-6">
        {
          error && <div className="alert alert-danger">
            <p>{error}</p>
          </div>
        }
        <h1 className="text-center">Connexion</h1>
        <Field
          label="Email"
          name="email"
          type="text"
          placeholder="Email"
          value={credentials.email}
          error={""}
          onChange={handleChange}
        />
        <Field
          label="Mot de passe"
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={credentials.password}
          error={""}
          onChange={handleChange}
        />
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-block btn-primary">Envoyer</button>
          </div>
          <div className="col-md-6">
            <Link to="/registration" className="btn btn-block btn-success">Créer une compte</Link>
          </div>
        </div>
      </div>
    </form>
  )
};

export default LoginPage;
