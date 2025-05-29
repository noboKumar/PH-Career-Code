import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((res) => {
        console.log(res);
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 border-2 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-semibold">Login Now</h1>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              required
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              required
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
