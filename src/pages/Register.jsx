import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 border-2 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-semibold">Please Register</h1>
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
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

export default Register;
