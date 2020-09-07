import React from "react";
//import { FixedSizeList as List } from "react-window";
import ReactCountryFlag from "react-country-flag";
import "./styles.css";

export const Table = props => {
  const { allCountriesData } = props || {};

  const handleCountryRowClick = country_code => {
    props.history.push("/country?countryCode=" + country_code);
  };
  return (
    <div className="root_table">
      <div className="hdr_table">
        Confirmed Cases By Country - Click on any country to know more details
      </div>
      {/* <input
        id="myInput"
        type="text"
        onKeyDown={handleKeyUpSearch}
        placeholder="Search for a country"
      /> */}
      <table className="body_table" id="myTable">
        {allCountriesData &&
          allCountriesData.length &&
          allCountriesData.map(dataUtil => {
            return (
              <tr
                onClick={handleCountryRowClick.bind(
                  null,
                  dataUtil.countryInfo._id
                )}
              >
                <th>
                  <div className="val_country"> {dataUtil.cases}</div>
                </th>
                <th>
                  <div className="lbl_country">{dataUtil.country}</div>
                </th>
                <th>
                  {dataUtil.countryInfo && dataUtil.countryInfo.iso2 ? (
                    getCountryFlag(dataUtil.countryInfo.iso2)
                  ) : (
                    <div />
                  )}
                </th>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

const getCountryFlag = country_code => {
  return <ReactCountryFlag countryCode={country_code} style={flagStyle} />;
};

const flagStyle = {
  height: "1.19rem",
  width: "1.19rem",
  marginRight: "1rem",
  marginTop: "0.1rem",
  alignSelf: "center"
};
