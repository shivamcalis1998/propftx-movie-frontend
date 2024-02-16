import { MOVIE_DELETE, MOVIE_GET, MOVIE_POST, MOVIE_PUT } from "./actionTypes";

const initialState = {
  movies: null,
  totalPages: null,
};

const storeReducer = (store = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_GET:
      return {
        ...store,
        movies: payload.movies,
        totalPages: payload.totalPages,
      };
    case MOVIE_POST:
      return { ...store, movies: [...store.movies, payload.newMovie] };
    case MOVIE_DELETE:
      const updateMoviesData = store.movies.filter(
        (el) => el._id !== payload.id
      );
      return { ...store, movies: updateMoviesData };
    case MOVIE_PUT:
      const updatedMovie = store.movies.map((el) =>
        el._id === payload.editMovie._id ? payload.editMovie : el
      );
      return { ...store, movies: updatedMovie };
    default:
      return store;
  }
};
export default storeReducer;
