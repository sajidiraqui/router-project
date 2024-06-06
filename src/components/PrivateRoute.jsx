import { Navigate } from "react-router-dom";
const PrivateRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  }
  // Checking feature branch
  return <Navigate to="/login" />;
};

export default PrivateRoute;
