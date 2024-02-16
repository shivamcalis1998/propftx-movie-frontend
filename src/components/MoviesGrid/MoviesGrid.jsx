import React from "react";
import styles from "./MoviesGrid.module.css";

const MoviesGrid = ({ movies, handleDelete, HandleEditMovie }) => {
  return (
    <div className={styles.moviesGrid}>
      {movies?.map((movie) => (
        <div key={movie?._id} className={styles.movieCard}>
          <img src={movie?.image} alt={movie.title} />
          <div className={styles.movieDetails}>
            <h2>{movie?.title}</h2>
            <p>Director: {movie.director}</p>
            <p>
              Created At:
              {`${new Date(
                movie?.createdAt * 1
              ).toLocaleTimeString()} ${new Date(
                movie?.createdAt * 1
              ).toLocaleDateString()}`}
            </p>
            <p>Rating: {movie?.rating}</p>
            <p>Language: {movie?.language}</p>
            <div>
              <p> actions</p>
              <div>
                <button onClick={() => handleDelete(movie?._id)}>delete</button>
                <button onClick={() => HandleEditMovie(movie)}>edit</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
