import React, { useEffect, useState } from 'react';
import { voitureService } from '../services/voitureService';
import { Voiture } from '../models/voiture';

const VoituresPage = () => {
  const [voitures, setVoitures] = useState<Voiture[]>([]);

  // récuperer la liste des voitures
  const fetchVoitures = async () => {
    try {
      const data = await voitureService.findAll();
      setVoitures(data)
    } catch (error) { }
  };

  useEffect(() => {
    fetchVoitures()
  }, [])

  return (
    <div className="row card-deck mb-3 text-center">
      {voitures && voitures.map((v, i) => (
        <div key={i} className="col-md-4">
          <div key={i} className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{v.marque}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">${v.price} </h1>
              <p>
                {v.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default VoituresPage;