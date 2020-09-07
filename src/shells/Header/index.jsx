import React from "react";
import "./styles.css";

export const Header = props => {
  const { allCovidData } = props || {};
  const {
    cases,
    deaths,
    recovered,
    active,
    todayCases,
    todayDeaths,
    todayRecovered
  } = allCovidData || {};
  return (
    <div className="root_header">
      <div>
        <div className="lbl_overall">Worldwide numbers till date:</div>
      </div>
      <div className="body_header">
        <div className="body_tile">
          <div className="lbl_tile">Cases</div>
          <div className="val_title">{cases}</div>
        </div>
        <div className="body_tile">
          <div className="lbl_tile">Deaths</div>
          <div className="val_title">{deaths}</div>
        </div>
        <div className="body_tile">
          <div className="lbl_tile">Recovered</div>
          <div className="val_title">{recovered}</div>
        </div>
        <div className="body_tile">
          <div className="lbl_tile">Active</div>
          <div className="val_title">{active}</div>
        </div>
      </div>

      <div>
        <div className="lbl_overall">Worldwide numbers today:</div>
      </div>
      <div className="body_header">
        <div className="body_tile">
          <div className="lbl_tile">Cases</div>
          <div className="val_title">{todayCases}</div>
        </div>
        <div className="body_tile">
          <div className="lbl_tile">Deaths</div>
          <div className="val_title">{todayDeaths}</div>
        </div>
        <div className="body_tile">
          <div className="lbl_tile">Recovered</div>
          <div className="val_title">{todayRecovered}</div>
        </div>
      </div>
    </div>
  );
};
