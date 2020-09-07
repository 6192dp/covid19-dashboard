import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as localActions from "./actions";
import { connect } from "react-redux";
import { Header } from "./Header";
import { Header as Mainheader } from "./Login/header";
import { Table } from "./Table";
import { Globe } from "./Globe";
import "./index.css";

const Dasheader = props => {
  useEffect(() => {
    props.getAllCovidData();
    props.getAllCountriesData();
  }, []);

  const navToVaccineTracker = () => {
    props.history.push("/vaccine");
  };
  return (
    <div className="root_home">
      <Mainheader headerTitle="Worldwide numbers" />
      <Header
        allCovidData={props.allCovidData && props.allCovidData.allCovidData}
      />

      <Table
        allCountriesData={
          props.allCovidData && props.allCovidData.allCountriesData
        }
        history={props.history}
      />

      <div onClick={navToVaccineTracker} className="lnk_vaccineTracker">
        Would you like to know the status of vaccine development progress?{" "}
        <span>Track here</span>
      </div>

      <Globe
        allCountriesData={
          props.allCovidData && props.allCovidData.allCountriesData
        }
      />
    </div>
  );
};

function mapStateToProps(state) {
  const { router, allCovidData } = state;
  return {
    router,
    allCovidData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...localActions
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dasheader)
);
