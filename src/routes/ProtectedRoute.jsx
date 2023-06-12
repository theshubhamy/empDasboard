import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const { authInfo } = useSelector((state) => state.auth);

  return (
    <>
      {authInfo === null ? (
        <Navigate to="/login" state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
