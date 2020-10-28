// getAll: () => fetch(`${URL}?limit=20`).then((response) => response.json()),
// getSingle: () => fetch(`${URL}/1`).then((response) => response.json()),
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export default api;
