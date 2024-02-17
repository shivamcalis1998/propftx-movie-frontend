import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../redux/action";
import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      dispatch(login(userData))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
      navigate("/movies");
    } else {
      dispatch(signup(userData));
      setIsLogin(!isLogin);
    }
    setUserData({
      email: "",
      password: "",
    });
  };

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
    setUserData({
      email: "",
      password: "",
    });
  };

  const takeUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mainDiv">
      <h1>
        Only email id with <span className="admin-word">admin</span> word can
        perform CRUD operation
      </h1>
      <h1 style={{ color: "rgb(85, 9, 225)" }}>
        Example - shivamswamiadmin252@gmail.com
      </h1>
      <div className="login-container">
        <div className="form-container">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>

          {loading ? (
            <SkeletonLoading />
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                onChange={takeUserData}
                value={userData.email}
                type="email"
                placeholder="Email"
                required
              />
              <input
                name="password"
                onChange={takeUserData}
                value={userData.password}
                type="password"
                placeholder="Password"
                required
              />
              <button type="submit">{isLogin ? "Login" : "Sign up"}</button>
            </form>
          )}

          <p onClick={handleSwitchForm} className="switch-form">
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
