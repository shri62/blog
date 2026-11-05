
// Import React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import components
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

// Import authentication context
import { AuthProvider } from "./context/AuthContext";

// Import pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

// Main application
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/blog" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
