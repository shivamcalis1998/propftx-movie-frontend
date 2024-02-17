import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  MOVIE_DELETE,
  MOVIE_GET,
  MOVIE_POST,
  MOVIE_PUT,
} from "./actionTypes";

import axios from "axios";

export const signup = (data) => async (dispatch) => {
  try {
    await axios.post(
      `https://propftx-movie-backend-ojpq.onrender.com/signup`,
      data
    );
  } catch (error) {
    console.log(error);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const loginp = await axios.post(
      `https://propftx-movie-backend-ojpq.onrender.com/login`,
      data
    );

    localStorage.setItem("token", loginp.data.token);
    localStorage.setItem("role", loginp.data.role);
    localStorage.setItem("userId", loginp.data.userId);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token: loginp.data.token,
        role: loginp.data.role,
        userId: loginp.data.userId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesData = (query, token) => async (dispatch) => {
  try {
    const { language, sort, search, sortD, page, limit } = query;

    const response = await axios.get(
      `https://propftx-movie-backend-ojpq.onrender.com/movies?language=${language}&sort=${sort}&sortD=${sortD}&search=${search}&page=${page}&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          authentication: token,
        },
      }
    );

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

export const createMovieData = (formDataToSend, token) => async (dispatch) => {
  try {
    const postData = await axios.post(
      `https://propftx-movie-backend-ojpq.onrender.com/movies`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "application/json",
          authentication: token,
        },
      }
    );

    dispatch({
      type: MOVIE_POST,
      payload: { newMovie: postData.data.movie },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovieData = (token, id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://propftx-movie-backend-ojpq.onrender.com/movies/${id}`,
      {
        headers: {
          authentication: token,
        },
      }
    );

    dispatch({
      type: MOVIE_DELETE,
      payload: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

export const editMovieData = (token, updateMovie, id) => async (dispatch) => {
  try {
    const editMovies = await axios.put(
      `https://propftx-movie-backend-ojpq.onrender.com/movies/${id}`,
      updateMovie,
      {
        headers: {
          authentication: token,
        },
      }
    );

    dispatch({
      type: MOVIE_PUT,
      payload: { editMovie: editMovies.data.movie },
    });
  } catch (error) {
    console.log(error);
  }
};
