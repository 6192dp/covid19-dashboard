import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as localActions from "./actions";
import { connect } from "react-redux";
import "./styles.css";
import { Header } from "../Login/header";
import { PieChart } from "react-minimal-pie-chart";

const colorsArr = [
  "red",
  "peru",
  "burlywood",
  "bisque",
  "yellow",
  "lightblue",
  "violet",

  "pink"
];

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
    const phaseDataUtil = vaccineDataUtil.phases || [];
    let transformArray = [];
    phaseDataUtil &&
      phaseDataUtil.length &&
      phaseDataUtil.map((item, index) => {
        transformArray.push({
          title: item.phase,
          color: colorsArr[index],
          value: Number.parseInt(item.candidates, 10)
          // Math.round(
          //   ((Number.parseInt(item.candidates, 10) * 100) /
          //     vaccineDataUtil.totalCandidates) *
          //     100
          // ) / 100
        });
      });
    return (
      <div className="root_vaccine">
        <Header headerTitle="Vaccine Tracker" />

        <div className="total_vaccine">
          Total Candidates: {vaccineDataUtil.totalCandidates}
        </div>
        <div className="pie_vaccine">
          <PieChart
            data={transformArray}
            radius={PieChart.defaultProps.radius}
            label={({ dataEntry }) =>
              dataEntry.title + " (" + dataEntry.value + ")"
            }
            labelStyle={{
              fontSize: "0.22rem",
              fontWeight: "bold",
              fontFamilt: "Rajdhani"
            }}
          />
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
