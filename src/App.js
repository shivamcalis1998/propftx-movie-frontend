import "./App.css";
import Movies from "./components/Movies/Movies";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import CreateMovie from "./components/Create movies/CreateMovie";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  const token = useSelector((state) => state.token);
  return (
    <Router>
      <div className="App">
        <Navbar token={token} />
        <Routes>
          <Route
            path="/"
            element={
              token ? <Movies token={token} /> : <Navigate to="/login" />
            }
          />
          {token && <Route path="/movies" element={<Movies token={token} />} />}
          <Route path="/createMovies" element={<CreateMovie token={token} />} />
          <Route path="/login" element={<Login token={token} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
