import React, { useEffect, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// routes
import ProtectedRoute from "./routes/ProtectedRoute";
// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Signin = lazy(() => import("./auth/Signin"));
const Signup = lazy(() => import("./auth/Signup"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const { authInfo } = useSelector((state) => state.auth);

  return (
    <React.StrictMode>
      {authInfo !== null && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={authInfo == null ? <Signin /> : <Navigate to="/" replace />}
        />
        <Route
          path="/register"
          element={authInfo == null ? <Signup /> : <Navigate to="/" replace />}
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </React.StrictMode>
  );
};

export default React.memo(App);
