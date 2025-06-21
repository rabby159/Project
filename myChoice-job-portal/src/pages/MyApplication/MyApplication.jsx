import React, { useEffect, useState } from "react";
import NavbarForAuth from "../Shared/NavbarForAuth";
import useAuth from "../../hooks/useAuth";
import MyAppTable from "./MyAppTable";

const MyApplication = () => {
  const { user } = useAuth();
  const [application, setApplication] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setApplication(data));
  }, [user.email]);
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
              <th>Job Type</th>
            </tr>
          </thead>
          <tbody>
            {application.map((app, index) => (
              <MyAppTable key={index} app={app}></MyAppTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
