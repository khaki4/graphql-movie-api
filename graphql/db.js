import axios from 'axios';

const BASE_URL = "https://yts.lt/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`

export const getMovies = async (limit, rating) => {
  const res = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return res.data.data.movies;
};

export const getMovie = async (id) => {
  const res = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    }
  });
  return res.data.data.movie;
};

export const getSuggestions = async (id) => {
  const res = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    }
  });
  return res.data.data.movies;
};