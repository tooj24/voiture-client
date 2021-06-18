import axios from 'axios';
import { COMMENT_URL } from './api';

function comment(voitureId: string, data: any) {
  return axios
    .post(`${COMMENT_URL}/${voitureId}`, data)
    .then(resp => resp.data);
}

function getAll(voitureId: string) {
  return axios
    .get(`${COMMENT_URL}/${voitureId}`)
    .then(resp => resp.data);
}

export const commentService = {
  comment,
  getAll
}