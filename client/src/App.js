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
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/login/success`,
        { withCredentials: true }
      );
      const { user } = response.data;
      setUser(user);
    } catch (error) {
      console.log(error);
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
          element={user ? <Navigate to="/" /> : <Login getUser={getUser} />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup getUser={getUser} />}
        />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
