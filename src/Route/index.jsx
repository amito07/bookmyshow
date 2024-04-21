import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShowTime from "../pages/ShowTime";
import ProtectedRoute from "../components/ProtectedRoute";
import Ticket from "../pages/Ticket";
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
