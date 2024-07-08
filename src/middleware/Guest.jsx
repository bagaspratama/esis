import { jwtDecode } from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Guest() {
  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    return <Outlet />;
  } else {
    try {
      const dataUser = jwtDecode(token);
      const isLoggedIn = dataUser.keylogin1997;
      return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
    } catch (error) {
      localStorage.removeItem("token");
      return <Navigate to="/404" />;
    }
  }
}

export default Guest;
