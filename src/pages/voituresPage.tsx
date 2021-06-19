import React, { useEffect, useState } from 'react';
import { voitureService } from '../services/voitureService';
import { Voiture } from '../models/voiture';
import { NavLink } from 'react-router-dom';

const VoituresPage = () => {
  const [voitures, setVoitures] = useState<Voiture[]>([]);
  // pagination
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  // récuperer la liste des voitures
  const fetchVoitures = async (p: number = 1) => {
    try {
      const { voitures, page, pages } = await voitureService.findAll(p);
      setVoitures(voitures);
      setPage(+page);
      setPages(+pages);
    } catch (error) { }
  };

  useEffect(() => {
    fetchVoitures(page)
  }, [page])

  return (
    <>
      <div className="row card-deck mb-3 text-center">
        {voitures && voitures.map((v, i) => (
          <div key={i} className="col-md-4">
            <div key={i} className="card mb-4 shadow-sm" style={{ minHeight: '290px' }}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{v.marque}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">${v.price} </h1>
                <p>
                  {v.description.substr(0, 100) + " ..."}
                </p>
                <NavLink to={"/voitures/" + v._id}>Voir détails</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ul className="pagination d-flex justify-content-center">
        <li className={"page-item " + (page === 0 && "disabled")}>
          <button
            className="page-link"
            onClick={() => setPage(page - 1)}
          >
            <span aria-hidden="true">&laquo;</span> Prec
          </button>
        </li>
        <li className={"page-item " + (page === pages && "disabled")}>
          <button
            className="page-link"
            onClick={() => setPage(page + 1)}
          >
            Suiv <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </>
  )
};

export default VoituresPage;