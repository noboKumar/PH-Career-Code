import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MyJobPost = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [myJobs, setMyJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs?email=${email}`)
      .then((res) => {
        setMyJobs(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [email]);
  return (
    <div className="space-y-2">
      <h1 className="text-xl">My job post({myJobs.length})</h1>
      <div className="grid grid-cols-4 gap-5">
        {myJobs.map((job) => (
          <div key={job._id}>
            <img
              className="w-[150px] rounded-2xl"
              src={job.company_logo}
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-4xl">{job.company}</h1>
              <p className="text-2xl">Role: {job.category}</p>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJobPost;
