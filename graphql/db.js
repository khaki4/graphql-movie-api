import fetch from 'node-fetch';

const API_URL = "https://yts.lt/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  const getPrefix = () => REQUEST_URL.includes('?') ? '&' : '?';
  if (limit > 0) {
    REQUEST_URL += `${getPrefix()}limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `${getPrefix()}minimum_rating=${rating}`
  }
  return fetch(REQUEST_URL)
  .then(res => res.json())
  .then(json => json.data.movies);
}
