import React from "react";
import styles from "./MoviesGrid.module.css";
import { useSelector } from "react-redux";

const MoviesGrid = ({ movies, handleDelete, HandleEditMovie, language }) => {
  const role = useSelector((state) => state.role);
  return (
    <div className={styles.moviesGrid}>
      {movies.length > 0 ? (
        movies?.map((movie) => (
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
                {role === "ADMIN" ? (
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
                ) : (
                  <p style={{ color: "red", fontSize: "20px" }}>
                    Only admin can Perform Edit/Delete
                  </p>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1
          style={{
            width: "800px",
            textAlign: "center",
            marginLeft: "90%",
          }}
        >
          No Movie avilabe with {language} language
        </h1>
      )}
    </div>
  );
};

export default MoviesGrid;
