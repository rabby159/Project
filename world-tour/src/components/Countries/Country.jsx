import React from "react";

const Country = ({ country }) => {
    // console.log(country.name.common);
    
    const { name, capital } = country;

  return (
    <div>
      <p>Name: {name.common}</p>
      <p>Capital: {capital}</p>
    </div>
  );
};

export default Country;
