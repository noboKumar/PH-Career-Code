import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const singleJobData = useLoaderData();
  const { company, company_logo } = singleJobData;
  return (
    <div>
      <img src={company_logo} alt="logo" />
      <h1>{company}</h1>
    </div>
  );
};

export default JobDetails;
