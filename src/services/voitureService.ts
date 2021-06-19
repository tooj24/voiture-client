import axios from 'axios';
import { VOITURE_URL } from "./api"

function findAll(page: number) {
  return axios
    .get(`${VOITURE_URL}/?page=${page}`)
    .then(resp => resp.data)
}

function getVoiture(id: string) {
  return axios
    .get(`${VOITURE_URL}/${id}`)
    .then(resp => resp.data)
}

function create(data: any) {
  return axios
    .post(`${VOITURE_URL}`, data)
    .then(resp => resp.data);
}

export const voitureService = {
  findAll,
  getVoiture,
  create
}