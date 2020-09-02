export function allCovidData(state = {}, action) {
  switch (action.type) {
    case "UPDATE_ALL_COVID_DATA": {
      const { allCovidData } = action;
      return Object.assign({}, state, { allCovidData });
    }
    case "UPDATE_ALL_COUNTRIES_DATA": {
      const { allCountriesData } = action;
      return Object.assign({}, state, { allCountriesData });
    }
    case "UPDATE_COUNTRY_DATA": {
      const { countryData } = action;
      return Object.assign({}, state, { countryData });
    }
    default:
      return state;
  }
}
