import axios from 'axios';

const url = `http://localhost:5000/api/requests`;

export const createFoodRequest = (preference, bearerToken) =>
  axios.post(`${url}/user`, preference, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    },
  });
