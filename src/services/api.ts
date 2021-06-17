export const API_URL = "http://localhost:8000";

export const VOITURE_URL = `${API_URL}/voitures`;

export const COMMENT_URL = `${API_URL}/voitures`;

export const USER_URL = `${API_URL}/utilisateurs`;

async function fetchRes(url: string, method: string = "GET", data = null) {
  const params: any = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (data) {
    params.body = JSON.stringify(data);
  }

  const response = await fetch(url, params);
  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else {
    throw responseData;
  }
}

export {
  fetchRes
}