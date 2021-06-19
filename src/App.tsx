import React, { useState } from 'react';
import AuthContext from './context/AuthContext';
import { authService } from './services/authService';
import { HashRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import VoituresPage from './pages/voituresPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import VoiturePage from './pages/voiturePage';
import VoitureForm from './pages/VoitureForm';
import PrivateRoute from './components/PrivateRoute';

authService.setup();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      setIsAuthenticated
    }}>

      <HashRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/connexion" component={LoginPage} />
            <Route path="/registration" component={RegisterPage} />
            <Route path="/voitures/:id" component={VoiturePage} />
            <PrivateRoute path="/voitures" component={VoitureForm} />
            <Route path="/" component={VoituresPage} />
          </Switch>
        </div>
      </HashRouter>

    </AuthContext.Provider>
  );
}

export default App;
