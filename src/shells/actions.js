export function getAllCovidData() {
  return { type: "GET_ALL_COVID_DATA" };
}

export function getAllCountriesData() {
  return { type: "GET_ALL_COUNTRIES_DATA" };
}

export function getCountryData(country_code) {
  return { type: "GET_COUNTRY_DATA", country_code };
}
