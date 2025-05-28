import React from "react";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  console.log(job);
  const {_id, company, company_logo, description, location, requirements } = job;
  return (
    <div className="card bg-base-100 border p-5 shadow-sm">
      <figure>
        <img src={company_logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{company}</h2>
        <p>{location}</p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((req, index) => (
            <div className="badge badge-outline" key={index}>
              {req}
            </div>
          ))}
        </div>
      </div>
      <Link to={`/jobs/${_id}`}>
        <button className="btn btn-primary">Apply</button>
      </Link>
    </div>
  );
};

export default JobsCard;
