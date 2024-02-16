import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteData, getBooksData } from "../../Redux/action";
// import EditBooks from "../edit books/EditBooks";
import { deleteMovieData, getMoviesData } from "../../redux/action";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Editmovie from "../Edit movie/Editmovie";
import "./Movies.css";

const Movies = () => {
  const { movies, totalPages } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [movieD, setMovieD] = useState(null);

  const [query, setQuery] = useState({
    language: "",
    sort: "",
    category: "",
    userId: "",
    search: "",
    page: 1,
    limit: 8,
  });

  useEffect(() => {
    dispatch(getMoviesData(query));
  }, [dispatch, query]);

  const handleQuery = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  console.log(movies);

  const HandleEditMovie = (movie) => {
    setShow(true);
    setMovieD(movie);
  };

  const handlePages = (page) => {
    setQuery({ ...query, page: page });
  };

  const handleDelete = (id) => {
    dispatch(deleteMovieData(id));
  };

  console.log(totalPages);

  return (
    <div className="mainDiv">
      {!show && (
        <div className="selectContainer">
          <div>
            <select
              id="language"
              name="language"
              value={query.language}
              onChange={handleQuery}
              className="languageSelect"
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
          <div>
            <select
              id="sort"
              name="sort"
              value={query.sort}
              onChange={handleQuery}
              className="sortTimeSelect"
            >
              <option value="">Select Sort</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search by title"
              name="search"
              value={query.search}
              onChange={handleQuery}
              className="searchInput"
            />
          </div>
          <div>
            <select
              id="sorting"
              name="sort"
              value={query.sort}
              onChange={handleQuery}
              className="sortingSelect"
            >
              <option value="">Sort by Rating</option>
              <option value="rating_asc">Ascending</option>
              <option value="rating_desc">Descending</option>
            </select>
          </div>
        </div>
      )}

      <div
        style={{ marginTop: "5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        {show ? (
          <Editmovie moviesD={movieD} setShow={setShow} />
        ) : (
          <MoviesGrid
            movies={movies}
            handleDelete={handleDelete}
            HandleEditMovie={HandleEditMovie}
          />
        )}
      </div>

      <div>
        {[...new Array(totalPages)].map((el, i) => {
          return (
            <button
              disabled={query.page === i + 1}
              onClick={() => handlePages(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
