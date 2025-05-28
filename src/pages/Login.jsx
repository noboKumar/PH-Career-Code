import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { logInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl border-2">
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
