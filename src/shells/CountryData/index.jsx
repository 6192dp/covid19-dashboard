import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as importedActions from "../actions";
import { connect } from "react-redux";
import "./styles.css";
import { Header } from "../Login/header";
import { getQueryStringValue } from "../../utils";
import axios from "axios";

const CountryData = props => {
  useEffect(() => {
    const countryCode = getQueryStringValue("countryCode");
    const apiUrl = "https://disease.sh/v3/covid-19/countries/" + countryCode;
    const fetchCountryData = async () => {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        props.updateCountryData(response.data);
      }
    };
    fetchCountryData();
  }, []);
  const { allCovidData } = props || {};
  if (allCovidData && allCovidData.countryData) {
    const countryDataUtil = allCovidData.countryData || {};
    return (
      <div className="root_vaccine">
        <Header headerTitle="Country Data" />

        <img
          style={{ height: "5rem", margin: "0 auto 1rem", display: "flex" }}
          src={
            countryDataUtil &&
            countryDataUtil.countryInfo &&
            countryDataUtil.countryInfo.flag
          }
        />
        <div className="total_vaccine">Country : {countryDataUtil.country}</div>
        <div className="total_vaccine">
          Continent : {countryDataUtil.continent}
        </div>
        <div className="total_vaccine">
          Population : {countryDataUtil.population}
        </div>
        <div className="total_vaccine">
          Total Cases : {countryDataUtil.cases}
        </div>

        <div className="total_vaccine">
          Recovered : {countryDataUtil.recovered}
        </div>
        <div className="total_vaccine">
          Total Deaths : {countryDataUtil.deaths}
        </div>

        <div className="total_vaccine">
          Today&apos;s Cases : {countryDataUtil.todayCases}
        </div>

        <div className="total_vaccine">
          Today&apos;s Deaths : {countryDataUtil.todayDeaths}
        </div>

        <div className="total_vaccine">
          Cases Per Million : {countryDataUtil.casesPerOneMillion}
        </div>

        <div className="total_vaccine">
          Deaths Per Million : {countryDataUtil.deathsPerOneMillion}
        </div>

        <div className="total_vaccine">
          Active Per Million : {countryDataUtil.activePerOneMillion}
        </div>

        <div className="total_vaccine">
          Recovered Per Million : {countryDataUtil.recoveredPerOneMillion}
        </div>

        <div className="total_vaccine">
          Critical Per Million : {countryDataUtil.criticalPerOneMillion}
        </div>
      </div>
    );
  }
  return (
    <div className="root_login">
      <Header headerTitle="Vaccine Tracker" />

      <div>Loading data...</div>
    </div>
  );
};

function mapStateToProps(state) {
  const { allCovidData } = state;
  return { allCovidData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...importedActions
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CountryData)
);
