import axios from 'axios';
import { VOITURE_URL } from "./api"

function findAll() {
  return axios
    .get(`${VOITURE_URL}`)
    .then(resp => resp.data)
}

export const voitureService = {
  findAll
}