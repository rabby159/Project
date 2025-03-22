import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <p>All Country Here! It's total {countries.length}</p>
      {countries.map((country) => (
        <Country key={country.cca2} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
