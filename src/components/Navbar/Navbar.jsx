import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action";

const Navbar = ({ token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.role);

  const createMovie = () => {
    navigate("/createMovies");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={styles.main} style={{ marginRight: "20px" }}>
      <div>
        <Link to="/Movies">
          <button>Movies</button>
        </Link>
      </div>
      <div>
        {role === "ADMIN" ? (
          <button onClick={createMovie}>Create Movies</button>
        ) : (
          ""
        )}
        {token ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
