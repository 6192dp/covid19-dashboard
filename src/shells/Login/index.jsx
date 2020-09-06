import React, { useState, useEffect } from "react";
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
      width: "20rem"
    }
  }
}));

const Login = props => {
  useEffect(() => {
    //once component mounts
    if (props.login && props.login.emailErrorText) {
      props.clearEmailErrorText();
    }
    if (props.login && props.login.passwordErrorText) {
      props.clearPasswordErrorText();
    }

    // before component unmounts
    return () => {
      if (props.login && props.login.emailErrorText) {
        props.clearEmailErrorText();
      }
      if (props.login && props.login.passwordErrorText) {
        props.clearPasswordErrorText();
      }
    };
  }, []);

  const classes = useStyles();
  const [mobNo, updateMobNo] = useState("");
  const [passValue, updatePassValue] = useState("");

  const handleMobNoChange = e => {
    updateMobNo(e.target.value);
  };

  const handlePassValueChange = e => {
    updatePassValue(e.target.value);
  };

  const navigateToSignupScreen = () => {
    props.history.push("signup");
  };

  const handleLoginClick = () => {
    //If email/password is empty or does not match the format criteria, show an error
    //else call Login API
    if (mobNo === "" || !mobNo.includes("@") || !mobNo.includes(".")) {
      props.updateEmailErrorText("Enter a valid e-mail address");
    } else if (passValue === "" || passValue.length < 6) {
      props.updatePasswordErrorText(
        "Password should be atleast 6 characters long!"
      );
    } else {
      props.handleLoginApi({ user_email: mobNo, user_password: passValue });
    }
  };

  return (
    <div className="root_login">
      <Header headerTitle="Login" />
      <div className={classes.root}>
        <div className="input_mobno">
          <TextField
            label="Email Address"
            variant="outlined"
            onChange={handleMobNoChange}
            value={mobNo}
          />
          {props.login && props.login.emailErrorText ? (
            <div className="txt_error">{props.login.emailErrorText}</div>
          ) : (
            <div />
          )}
        </div>

        <div className="input_passValue">
          <TextField
            label="Password"
            variant="outlined"
            onChange={handlePassValueChange}
            value={passValue}
            type="password"
          />
          {props.login && props.login.passwordErrorText ? (
            <div className="txt_error">{props.login.passwordErrorText}</div>
          ) : (
            <div />
          )}
        </div>

        <div className="btn_login" onClick={handleLoginClick}>
          Check In
        </div>
        <div className="txt_footer">
          Are you a new user?{" "}
          <span onClick={navigateToSignupScreen}>Register here!</span>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { login } = state;
  return { login };
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
  )(Login)
);
