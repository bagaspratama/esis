import { jwtDecode } from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Authenticated() {
  const token = useSelector((state) => state.auth.token);

  try {
    const dataUser = jwtDecode(token);
    const isLoggedIn = dataUser.keylogin1997;
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  } catch (error) {
    return <Navigate to="/Login" />;
  }
}

export default Authenticated;
