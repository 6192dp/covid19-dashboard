import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as localActions from "./actions";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import { Header } from "./header";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1.25rem",
    "& .MuiTextField-root": {
      width: "16rem"
    }
  }
}));

const SignUp = props => {
  const classes = useStyles();

  const [mobNo, updateMobNo] = useState("");
  const [passValue, updatePassValue] = useState("");

  const handleMobNoChange = e => {
    updateMobNo(e.target.value);
  };

  const handlePassValueChange = e => {
    updatePassValue(e.target.value);
  };

  const navigateToLoginScreen = () => {
    props.history.push("login");
  };
  return (
    <div className="root_login">
      <Header headerTitle="Create an Account" />
      <div className={classes.root}>
        <div className="input_mobno">
          <TextField
            label="Mobile Number"
            variant="outlined"
            onChange={handleMobNoChange}
            value={mobNo}
          />
        </div>
        <div className="input_passValue">
          <TextField
            label="Password"
            variant="outlined"
            onChange={handlePassValueChange}
            value={passValue}
            type="password"
          />
        </div>

        <div className="btn_login">Register</div>
        <div className="txt_footer">
          Already have an account?{" "}
          <span onClick={navigateToLoginScreen}>Sign In</span>
        </div>
      </div>
    </div>
  );
};

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
    null,
    mapDispatchToProps
  )(SignUp)
);
