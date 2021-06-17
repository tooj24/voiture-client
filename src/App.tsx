import React, { useState } from 'react';
import AuthContext from './context/AuthContext';
import { authService } from './services/authService';
import RegisterPage from './pages/registerPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      setIsAuthenticated
    }}>

      <RegisterPage />

    </AuthContext.Provider>
  );
}

export default App;
