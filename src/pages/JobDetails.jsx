import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const JobDetails = () => {
  const singleJobData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { company, company_logo, description, _id } = singleJobData;

  const handleApplyNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;

    const application = {
      name,
      description,
      jobId: _id,
      applicant: user.email,
    };

    // post application data
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <img src={company_logo} alt="logo" />
      <h1 className="text-4xl">{company}</h1>
      <p className="text-xl">{description}</p>
      <div className="my-10">
        <form
          onSubmit={handleApplyNow}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <legend className="fieldset-legend">Add Your details here</legend>

          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Your name"
          />

          <label className="label">Description</label>
          <input
            name="description"
            type="text"
            className="textarea"
            placeholder="Add Your description"
          />
          <input className="btn btn-primary" type="submit" value="Apply Now" />
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
