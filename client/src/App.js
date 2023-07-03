import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import UserHome from "./pages/UserHome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import CommunityCal from "./pages/CommunityCal/CommunityCal";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
    
      <Routes>
      <Route
          exact
          path="/"
          element={<Layout />}>
            
        <Route
          exact
          path="/"
          element={user ? <UserHome user={user} /> : <Navigate to="/home" />}
        />
        <Route
          exact
          path="/home"
          element={user ? <Navigate to="/" /> : <LandingPage />}
        />
        <Route
          path="/community-calendar"
          element={user ? <CommunityCal/> : <LandingPage />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
