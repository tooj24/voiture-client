import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Field } from '../components/Field';
import { TextArea } from '../components/TextArea';
import { Voiture } from '../models/voiture';
import { voitureService } from '../services/voitureService';

const VoitureForm = ({ history }: RouteComponentProps) => {
  // voiture
  const [voiture, setVoiture] = useState<Voiture>({
    _id: "",
    marque: "",
    description: "",
    price: 0
  })
  // erreurs
  const [errors, setErrors] = useState({
    marque: "",
    description: "",
    price: ""
  })

  // Gestion des champs
  const handleChange = ({ currentTarget }: any) => {
    const { value, name } = currentTarget;
    setVoiture({ ...voiture, [name]: value });
  };

  // soumission formulaire
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const apiErrors: any = {};

    try {
      await voitureService.create(voiture);
      history.replace("/");
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
        <h1 className="text-center">Nouvelle voiture</h1>
        <Field
          type="text"
          name="marque"
          label="Marque"
          placeholder="Marque"
          value={voiture.marque}
          error={errors.marque}
          onChange={handleChange}
        />
        <Field
          type="number"
          name="price"
          label="Prix"
          placeholder="Prix"
          value={voiture.price}
          error={errors.price}
          onChange={handleChange}
        />
        <TextArea
          name="description"
          label="Description"
          placeholder="Decription"
          value={voiture.description}
          error={errors.description}
          onChange={handleChange}
        />
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-block btn-primary">Enregistrer</button>
          </div>
          <div className="col-md-6">
            <Link to="/" className="btn btn-block btn-danger">Annuler</Link>
          </div>
        </div>
      </div>
    </form>
  )
};

export default VoitureForm;