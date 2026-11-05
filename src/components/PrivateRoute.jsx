
// Import React tools
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Protect pages from logged-out users
function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  // Send logged-out users to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Show the page if logged in
  return children;
}

export default PrivateRoute;
