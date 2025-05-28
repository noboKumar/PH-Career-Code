import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

const HotJobs = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);

  return (
    <div className="space-y-5">
      <h1 className="text-4xl text-center">Hot Jobs ({jobsData.length})</h1>
      <div className="grid grid-cols-4 gap-10">
        {jobsData.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
