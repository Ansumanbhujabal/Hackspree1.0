import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout/Layout";
import LandingPage from "./pages/LandingPage";
import CommunityCal from "./pages/CommunityCal";
import NoPage from "./pages/NoPage";
import UserLayout from "./pages/UserLayout";
import YourEvents from "./pages/YourEvents";
import { useDispatch } from "react-redux";
import { getEvents } from "./features/eventsGlobal/eventsGlobalSlice";
import { getJoinedEvents } from "./features/joinedEvents/joinedEventsSlice";
import { getUserEvents } from "./features/userEvents/userEventsSlice";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    dispatch(getJoinedEvents());
  }, []);

  useEffect(() => {
    dispatch(getUserEvents());
  }, []);

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
          element={user ? <UserLayout user={user} /> : <Layout /> }>
  
        <Route
          index element={user ? <Home user={user} /> : <LandingPage />}
          />

        <Route
          exact
          path="/community-calendar"
          element={user ? <CommunityCal user={user} /> : <LandingPage />}
        />

      <Route
          exact
          path="/your-events"
          element={user ? <YourEvents user={user} /> : <LandingPage />}
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

        <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
