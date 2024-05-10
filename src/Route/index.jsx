import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShowTime from "../pages/ShowTime";
import ProtectedRoute from "../components/ProtectedRoute";
import Ticket from "../pages/Ticket";
import Profile from "../pages/Profile";
import Home2 from "../pages/Home2";
import Booking from "../pages/Booking";
Ticket

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home2 />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/showtime"
            element={
              <ProtectedRoute>
                <ShowTime />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
