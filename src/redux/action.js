import { MOVIE_DELETE, MOVIE_GET, MOVIE_POST, MOVIE_PUT } from "./actionTypes";

import axios from "axios";

export const getMoviesData = (query) => async (dispatch) => {
  try {
    const { language, sort, search, sortD, page, limit } = query;

    const response = await axios.get(
      `https://propftx-movie-backend-ojpq.onrender.com/movies?language=${language}&sort=${sort}&sortD=${sortD}&search=${search}&page=${page}&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    dispatch({
      type: MOVIE_GET,
      payload: {
        movies: response.data.movie,
        totalPages: response.data.totalPages,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createMovieData = (formDataToSend) => async (dispatch) => {
  try {
    const postData = await axios.post(
      `https://propftx-movie-backend-ojpq.onrender.com/movies`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(postData);

    dispatch({
      type: MOVIE_POST,
      payload: { newMovie: postData.data.movie },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovieData = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://propftx-movie-backend-ojpq.onrender.com/movies/${id}`
    );

    dispatch({
      type: MOVIE_DELETE,
      payload: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

export const editMovieData = (updateMovie, id) => async (dispatch) => {
  try {
    const editMovies = await axios.put(
      `https://propftx-movie-backend-ojpq.onrender.com/movies/${id}`,
      updateMovie
    );

    dispatch({
      type: MOVIE_PUT,
      payload: { editMovie: editMovies.data.movie },
    });
  } catch (error) {
    console.log(error);
  }
};
