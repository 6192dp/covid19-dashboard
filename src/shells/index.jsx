import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as localActions from "./actions";
import { connect } from "react-redux";
import { Header } from "./Header";
import { Table } from "./Table";
import { Globe } from "./Globe";
import "./index.css";

const Dasheader = props => {
  useEffect(() => {
    props.getAllCovidData();
    props.getAllCountriesData();
  }, []);
  return (
    <div className="root_home">
      <Header
        allCovidData={props.allCovidData && props.allCovidData.allCovidData}
      />

      <Globe
        allCountriesData={
          props.allCovidData && props.allCovidData.allCountriesData
        }
      />
      <Table
        allCountriesData={
          props.allCovidData && props.allCovidData.allCountriesData
        }
        history={props.history}
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
