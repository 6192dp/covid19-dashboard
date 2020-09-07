import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as localActions from "./actions";
import { connect } from "react-redux";
import "./styles.css";
import { Header } from "../Login/header";

const VaccineTracker = props => {
  useEffect(() => {
    props.getVaccineStatus();
  }, []);
  const { vaccineData } = props || {};
  if (
    vaccineData &&
    vaccineData.vaccineData &&
    vaccineData.vaccineData.totalCandidates
  ) {
    const vaccineDataUtil = vaccineData.vaccineData || {};
    return (
      <div className="root_login">
        <Header headerTitle="Vaccine Tracker" />

        <div>Total Candidates: {vaccineDataUtil.totalCandidates}</div>
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
  const { vaccineData } = state;
  return { vaccineData };
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
  )(VaccineTracker)
);
