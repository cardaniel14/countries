import { useEffect, useState } from "react";
import "./App.css";
import fetchDataCountries from "./fetchingAPI";

function App() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countriesFiltered, setCountriesFiltered] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const emptyArr = [];
    countries.filter((country) => {
      country.name.common.toLowerCase() === inputValue.toLowerCase()
        ? emptyArr.push(country)
        : ``;
    });
    setCountriesFiltered(emptyArr);
    console.log(emptyArr);
  };

  useEffect(() => {
    const getDataCountries = async () => {
      try {
        const data = await fetchDataCountries();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getDataCountries();
  }, []);

  return (
    <>
      <input
        placeholder="Inserte un pais"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleButtonClick}>
        Search
      </button>

      {countriesFiltered
        ? countriesFiltered.map((country, index) => (
            <div key={index}>
              <h2>{country.name.common}</h2>
              <p>{country.capital}</p>
              <img alt="" src={country.flags.png}></img>
            </div>
          ))
        : `Buscando pais`}
    </>
  );
}

export default App;
