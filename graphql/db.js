import _ from "underscore";
let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filterdMovies = movies.find(movie => id === movie.id);
  return filterdMovies;
};

export const deleteMovie = id => {
  const cleanedMovies = _.reject(movies, movie => id === movie.id);
  return movies.length > cleanedMovies.length
    ? ((movies = cleanedMovies), true)
    : false;
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: getMovies().length,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
