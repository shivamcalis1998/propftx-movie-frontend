import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const createMovie = () => {
    navigate("/createMovies");
  };

  return (
    <div className={styles.main} style={{ marginRight: "20px" }}>
      <div>
        <Link to="/">
          <button>Movies</button>
        </Link>
      </div>
      <div>
        <button onClick={createMovie}>Create Movie</button>
      </div>
    </div>
  );
};

export default Navbar;
