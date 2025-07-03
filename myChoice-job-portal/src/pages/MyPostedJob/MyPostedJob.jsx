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

      <div className="max-w-7xl mx-auto my-5 overflow-x-auto">
        <table className="table table-lg">
          <thead>
            <tr>
              <th>Tittle</th>
              <th>Company</th>
              <th>Location</th>
              <th>Deadline</th>
              <th>Total Applied</th>
            </tr>
          </thead>
          <tbody>
            {myPostedJob.map((app, index) => (
              <tr>
                <td className="flex gap-3">
                  <img src={app.company_logo} alt="" className="w-10" />
                  {app.title}
                </td>
                <td>{app.company}</td>
                <td>{app.location}</td>
                <td>{app.applicationDeadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
