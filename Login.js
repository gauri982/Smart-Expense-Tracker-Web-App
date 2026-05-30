import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-primary w-100">
          Login
        </button>

        <p className="mt-3 text-center">
          New User? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;