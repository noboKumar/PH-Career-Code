import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [myApplication, setMyApplication] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/applications?email=${email}`,{withCredentials: true})
      .then((res) => {
        console.log(res.data);
        setMyApplication(res.data);
      })
      .catch((err) => console.log(err));
  }, [email]);
  return (
    <div>
      my application({myApplication.length})
      {myApplication.map((application) => (
        <p key={application._id}>
          {application.name} {application.description}
        </p>
      ))}
    </div>
  );
};

export default MyApplication;
