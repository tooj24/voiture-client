import React, { useState } from 'react';
import AuthContext from './context/AuthContext';
import { authService } from './services/authService';
import { HashRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import VoituresPage from './pages/voituresPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

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
            <Route path="/" component={VoituresPage} />
          </Switch>
        </div>
      </HashRouter>

    </AuthContext.Provider>
  );
}

export default App;
