// import Layout from "../layout/Layout";
import "./LoginPage.css";
import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  //   const navigate = useNavigate();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Perform login validation and logic here
  //     navigate({Layout}); // Redirects to the Dashboard page after login
  //   };
  return (
    <div className="wrapper">
      {/* onSubmit={handleSubmit} */}
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            No account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
