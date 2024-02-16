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

            <div className={styles.actions_container}>
              <p className={styles.actions_title}>Actions</p>
              <div>
                <button
                  className={styles.actions_button}
                  onClick={() => handleDelete(movie?._id)}
                >
                  Delete
                </button>
                <button
                  className={styles.actions_button}
                  onClick={() => HandleEditMovie(movie)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
