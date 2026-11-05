
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Display the login page
function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Log in and go to admin page
  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
