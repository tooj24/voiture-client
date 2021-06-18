import axios from 'axios';
import { USER_URL } from "./api"

function create(data: any) {
  return axios
    .post(`${USER_URL}`, data)
    .then(resp => resp.data)
}

export const userService = {
  create
}