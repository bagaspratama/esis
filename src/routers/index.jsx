import React from "react";
import { Route, Routes } from "react-router-dom";
import Authenticated from "../middleware/Authenticated";
import Dashboard from "../pages/Administrator/Dashboard";
import Login from "../pages/Auth/Login";
import Guest from "../middleware/Guest";

export default function Router() {
  return (
    <>
      <Routes>
        {/* Auth Route */}
        <Route element={<Authenticated />}>
          {/* Administrator Route */}
          <Route path="/" exact element={<Dashboard />} />
        </Route>

        {/* User Guest */}
        <Route element={<Guest />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* 404 */}
        <Route path="/404" element={<div>404</div>} />
      </Routes>
    </>
  );
}
