import React from "react";
import { FixedSizeList as List } from "react-window";
import ReactCountryFlag from "react-country-flag";
import "./styles.css";

export const Table = props => {
  const { allCountriesData } = props || {};
  return (
    <div className="root_table">
      <div className="hdr_table">Confirmed Cases By Country</div>
      <input
        id="myInput"
        type="text"
        onKeyDown={handleKeyUpSearch}
        placeholder="Search for a country"
      />
      <table className="body_table" id="myTable">
        {allCountriesData &&
          allCountriesData.length &&
          allCountriesData.map(dataUtil => {
            return (
              <tr>
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

const handleKeyUpSearch = () => {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

const flagStyle = {
  height: "1.19rem",
  width: "1.19rem",
  marginRight: "1rem",
  marginTop: "0.1rem",
  alignSelf: "center"
};
