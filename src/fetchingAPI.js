 const fetchDataCountries = async () => {
    const url = "https://restcountries.com/v3.1/all?fields=name,capital,flags";
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  };

fetchDataCountries();

export default fetchDataCountries

  