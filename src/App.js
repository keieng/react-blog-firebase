import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {isAuth ? (
          <>
            <Route path="/createpost" element={<CreatePost />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </>
        ) : (
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
