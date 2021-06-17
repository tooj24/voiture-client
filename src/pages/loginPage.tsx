import React, { useContext, useState } from 'react';

import { Field } from '../components/Field';
import authContext from '../context/AuthContext';
import { authService } from '../services/authService';

const LoginPage = () => {
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
  };

  // soumission du formulaire
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await authService.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
    } catch ({ error }: any) {
      setError(error)
  }
}

return (
  <form onSubmit={handleSubmit}>
    {console.log('render')}
    <Field
      label="Email"
      name="email"
      type="text"
      placeholder="Email"
      value={credentials.email}
      error={error}
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
    <button type="submit">Connexion</button>
  </form>
)
};

export default LoginPage;
