import React, { useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer, Circle, GeoJSON } from "react-leaflet";
import "../Header/styles.css";
import feverIcon from "../../icons/fever.svg";
import L from "leaflet";

const position = [22, 77];
const zoom = 4;

export const Globe = props => {
  const { allCountriesData } = props || {};
  //const [geoJSON, updateGeoJSON] = useState({});
  const [markers, updateMarker] = useState([]);

  useEffect(() => {
    const hasData =
      Array.isArray(allCountriesData) && allCountriesData.length > 0;

    if (!hasData) return;

    let markersUtil = [];
    allCountriesData.map((country, index) => {
      const keyUtil = "marker" + index;
      const { countryInfo = {} } = country;
      const { lat, long: lng } = countryInfo;
      markersUtil.push({
        key: keyUtil,
        position: [lat, lng],
        content: `${country.cases} cases`
      });

      updateMarker(markersUtil);
    });

    // const geoJsonUtil = {
    //   type: "FeatureCollection",
    //   features: allCountriesData.map((country = {}) => {
    //     const { countryInfo = {} } = country;
    //     const { lat, long: lng } = countryInfo;
    //     return {
    //       type: "Feature",
    //       properties: {
    //         ...country
    //       },
    //       geometry: {
    //         type: "Point",
    //         coordinates: [lng, lat]
    //       }
    //     };
    //   })
    // };
    // updateGeoJSON(geoJsonUtil);
  }, [allCountriesData]);

  const pointerIcon = new L.Icon({
    iconUrl: feverIcon,
    iconRetinaUrl: feverIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    //shadowUrl: '../assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92]
  });

  const MyPopupMarker = ({ content, position }) => (
    <Marker position={position} icon={pointerIcon}>
      <Popup>{content}</Popup>
    </Marker>
  );

  const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
      <MyPopupMarker key={key} {...props} />
    ));
    return <React.Fragment>{items}</React.Fragment>;
  };

  //if (Object.keys(geoJSON).length) {
  if (markers.length) {
    return (
      <div className="root_map">
        <Map
          center={position}
          zoom={zoom}
          style={{ height: "100%", width: "100%" }}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution={
              '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }
          />

          <MyMarkersList markers={markers} />
          {/* <GeoJSON
            key={geoJSON}
            data={geoJSON}
            style={() => ({
              color: "#4a83ec",
              weight: 0.5,
              fillColor: "#1a1d62",
              fillOpacity: 1
            })}
          /> */}
          {/* <Marker position={[50, 10]}>
            <Popup>Popup for any custom information.</Popup>
          </Marker> */}
        </Map>
      </div>
    );
  }
  return <div />;
};

// const MyCircles = props => {
//   return props.data.map((row, i) => {
//     if (row["Lat"] != null && row["Long"] != null) {
//       return (
//         <Circle
//           key={i}
//           center={[row["Lat"], row["Long"]]}
//           radius={1000 * Math.sqrt(row[props.date])}
//           fillColor={props.color}
//         />
//       );
//     }
//   });
// };
