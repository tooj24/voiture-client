import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Field } from '../components/Field';
import { userService } from '../services/userService';

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    pseudo: "",
    firstname: "",
    lastname: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    pseudo: "",
    firstname: "",
    lastname: ""
  });

  // Gestion des champs
  const handleChange = ({ currentTarget }: any) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  // soumission du formulaire
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const apiErrors: any = {};

    if (credentials.password !== credentials.passwordConfirm) {
      apiErrors.passwordConfirm =
        "Votre mot de passe n'est pas identique";
      setErrors(apiErrors);
      return;
    }
    try {
      await userService.create(credentials)
    } catch ({ response }) {
      const { errors: violations } = response.data;

      if (violations) {
        violations.forEach(({ param, msg }: any) => {
          apiErrors[param] = msg;
        });
      }
      setErrors(apiErrors);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="row d-flex justify-content-center">
      <div className="col-md-6">
        <h1 className="text-center">Registration</h1>
        <Field
          label="Email"
          name="email"
          type="text"
          placeholder="Email"
          value={credentials.email}
          error={errors.email}
          onChange={handleChange}
        />
        <Field
          label="Pseudo"
          name="pseudo"
          type="text"
          placeholder="Pseudo"
          value={credentials.pseudo}
          error={errors.pseudo}
          onChange={handleChange}
        />
        <div className="row">
          <div className="col-md-6">
            <Field
              label="Prénom"
              name="firstname"
              type="text"
              placeholder="Prénom"
              value={credentials.firstname}
              error={errors.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <Field
              label="Nom"
              name="lastname"
              type="text"
              placeholder="Nom"
              value={credentials.lastname}
              error={errors.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Field
              label="Mot de passe"
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={credentials.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <Field
              label="Confirmer le mot de passe"
              name="passwordConfirm"
              type="password"
              placeholder="Mot de passe"
              value={credentials.passwordConfirm}
              error={errors.passwordConfirm}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-block btn-primary">Envoyer</button>
          </div>
          <div className="col-md-6">
            <Link to="/connexion" className="btn btn-block btn-success">Se connecter</Link>
          </div>
        </div>
      </div>
    </form>
  )
}

export default RegisterPage;
