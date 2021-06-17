import { USER_URL, fetchRes } from "./api"

function create(data: any) {
  return fetchRes(`${USER_URL}`, 'POST', data)
    .then(data => data)
}

export const userService = {
  create
}