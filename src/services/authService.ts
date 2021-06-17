import { API_URL, fetchRes } from "./api"

// se connecter
function authenticate(data: any) {
  return fetchRes(`${API_URL}/connexion`, 'POST', data)
    .then(({ token }) => {
      window.localStorage.setItem('authToken', token);
      setToken(token);
    })
}

// token
function setToken(token: string) {
  
}

// déconnexion
function logout() {
  window.localStorage.removeItem('authToken');
}

// vérifier si connecté ou non
function isAuthenticated() {
  const token = window.localStorage.getItem('authToken');

  if(token) {
    return true;
  }
  return false;
}

export const authService = {
  authenticate,
  logout,
  isAuthenticated
}