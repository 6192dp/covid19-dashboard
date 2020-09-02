import React from "react";
import { Map, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import "../Header/styles.css";

export const Globe = props => {
  const position = [22, 77];

  return (
    <div className="root_map">
      <Map center={position} zoom={4} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          attribution={
            '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }
        />
      </Map>
    </div>
  );
};

const MyCircles = props => {
  return props.data.map((row, i) => {
    if (row["Lat"] != null && row["Long"] != null) {
      return (
        <Circle
          key={i}
          center={[row["Lat"], row["Long"]]}
          radius={1000 * Math.sqrt(row[props.date])}
          fillColor={props.color}
        />
      );
    }
  });
};
