import React from 'react';
import { NavLink } from 'react-router-dom';
import { authService } from '../services/authService';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // déconnexion
  const handleLogout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Voiture Catalogue</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink exact to="/" className="p-2 text-dark">Accueil</NavLink>
      </nav>
      {
        !isAuthenticated
        && (
          <NavLink
            className="btn btn-outline-primary"
            to="/connexion"
          >Connexioin</NavLink>
        )
        || (
          <button
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >Déconnexioin</button>
        )
      }


    </div>
  )
};

export default Header;