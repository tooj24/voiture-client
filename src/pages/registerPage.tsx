import React, { useState } from 'react';

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
    console.log(credentials)

    if (credentials.password !== credentials.passwordConfirm) {
      apiErrors.passwordConfirm =
        "Votre mot de passe n'est pas identique";
      setErrors(apiErrors);
      return;
    }
    try {
      await userService.create(credentials)
      console.log(credentials);
    } catch (error) {
      const { errors } = error;
      
      // apiErrors[e.name] = e.message
      console.log(errors);
      setErrors(apiErrors);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <Field
        label="Firstname"
        name="firstname"
        type="text"
        placeholder="Firstname"
        value={credentials.firstname}
        error={errors.firstname}
        onChange={handleChange}
      />
      <Field
        label="Lastname"
        name="lastname"
        type="text"
        placeholder="Lastname"
        value={credentials.lastname}
        error={errors.lastname}
        onChange={handleChange}
      />
      <Field
        label="Mot de passe"
        name="password"
        type="password"
        placeholder="Mot de passe"
        value={credentials.password}
        error={errors.password}
        onChange={handleChange}
      />
      <Field
        label="Confirmer le mot de passe"
        name="passwordConfirm"
        type="password"
        placeholder="Mot de passe"
        value={credentials.passwordConfirm}
        error={errors.passwordConfirm}
        onChange={handleChange}
      />
      <button type="submit">Envoyer</button>
    </form>
  )
}

export default RegisterPage;
