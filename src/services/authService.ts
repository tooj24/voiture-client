import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { API_URL } from "./api"

// se connecter
function authenticate(data: any) {
  return axios
    .post(`${API_URL}/connexion`, data)
    .then(resp => resp.data.token)
    .then(token => {
      window.localStorage.setItem('authToken', token);
      setToken(token);
    })
}

// token
function setToken(token: string) {
  axios.defaults.headers['authorization'] = "Bearer " + token;
}

// déconnexion
function logout() {
  window.localStorage.removeItem('authToken');
  delete axios.defaults.headers['authorization'];
}


function setup() {
  const token = window.localStorage.getItem('authToken');

  if (token) {
    const { exp: expiration }: any = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      setToken(token);
    }
  }
}

// vérifier si connecté ou non
function isAuthenticated() {
  const token = window.localStorage.getItem('authToken');

  if (token) {
    const { exp: expiration }: any = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      return true;
    }
    return false;
  }

  return false;
}

export const authService = {
  authenticate,
  logout,
  isAuthenticated
}