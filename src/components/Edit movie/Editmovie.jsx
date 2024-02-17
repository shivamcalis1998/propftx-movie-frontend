import React, { useState, useEffect } from "react";
import styles from "../Create movies/CreateMovie.module.css";
import { useDispatch } from "react-redux";
import { editMovieData } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const HandleEdit = ({ token, moviesD, setShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: moviesD.title,
    director: moviesD.director,
    language: moviesD.language,
    rating: moviesD.rating,
    image: moviesD.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  const handleClose = () => {
    setShow(false);
    navigate("/movies");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editMovieData(token, formData, moviesD._id));

    setFormData({
      title: "",
      director: "",
      language: "",
      rating: "",
      image: "",
    });
    setShow(false);
    navigate("/movies");
  };

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className={styles.heading}>Edit Movie</h2>
        <button onClick={() => handleClose()} className={styles.closeBtn}>
          X
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="director" className={styles.label}>
            director:
          </label>
          <input
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="language" className={styles.label}>
            Language:
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Language</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="italian">Italian</option>
            <option value="russian">Russian</option>
            <option value="sanskrit">Sanskrit</option>
            <option value="urdu">Urdu</option>
            <option value="germen">Germen</option>
            <option value="marwadi">Marwadi</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rating" className={styles.label}>
            Rating:
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image" className={styles.label}>
            Image:
          </label>
          <input
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default HandleEdit;
