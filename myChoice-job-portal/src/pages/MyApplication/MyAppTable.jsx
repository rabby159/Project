import React from "react";

const MyAppTable = ({ app }) => {
  const { title, company_logo, jobType, location, company } = app;

  return (
    <tr>
      <td className="flex gap-3">
        <img src={company_logo} alt="" className="w-10" />
        {title}
      </td>
      <td>{company}</td>
      <td>{location}</td>
      <td>{jobType}</td>
    </tr>
  );
};

export default MyAppTable;
