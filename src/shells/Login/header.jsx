import React from "react";
import "./styles.css";
//import socialicon from "../../icons/social.svg";

export const Header = props => {
  return (
    <div className="root_hdr">
      {props.headerTitle}
      {/* <img src={socialicon} className="img_social" /> */}
    </div>
  );
};
