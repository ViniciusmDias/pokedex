const URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

const api = {
  getAll: () => fetch(URL).then((response) => response.json()),
};

export default api;
