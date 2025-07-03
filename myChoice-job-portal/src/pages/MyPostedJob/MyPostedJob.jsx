import React, { useEffect, useState } from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import useAuth from "../../hooks/useAuth";

const MyPostedJob = () => {
  const { user } = useAuth();
  const [myPostedJob, setMyPostedJob] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyPostedJob(data));
  }, []);

  return (
    <div>
      <NavbarForAuth></NavbarForAuth>

      <div>
        <h3>count: {myPostedJob.length}</h3>
      </div>
    </div>
  );
};

export default MyPostedJob;
