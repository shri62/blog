
// Import React tools
import { createContext, useState } from "react";

// Create authentication context
export const AuthContext = createContext();

// Share login information with the app
export function AuthProvider({ children }) {
  // Check if the user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Log in the user
  const login = () => {
    setIsAuthenticated(true);
  };

  // Log out the user
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
