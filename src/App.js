import "./App.css";
import Movies from "./components/Movies/Movies";
// import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import CreateMovie from "./components/Create movies/CreateMovie";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/createMovies" element={<CreateMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
