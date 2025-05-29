import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const singleJobData = useLoaderData();
  const { company, company_logo, description } = singleJobData;
  return (
    <div>
      <img src={company_logo} alt="logo" />
      <h1 className="text-4xl">{company}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default JobDetails;
