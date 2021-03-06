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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTextField-root": {
      width: "20rem"
    }
  }
}));

const SignUp = props => {
  const classes = useStyles();

  const [mobNo, updateMobNo] = useState("");
  const [passValue, updatePassValue] = useState("");

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

  const handleMobNoChange = e => {
    updateMobNo(e.target.value);
  };

  const handlePassValueChange = e => {
    updatePassValue(e.target.value);
  };

  const navigateToLoginScreen = () => {
    props.history.push("login");
  };

  const handleSignupClick = () => {
    //If email/password is empty or does not match the format criteria, show an error
    //else call Login API
    if (mobNo === "" || !mobNo.includes("@") || !mobNo.includes(".")) {
      props.updateEmailErrorText("Enter a valid e-mail address");
    } else if (passValue === "" || passValue.length < 6) {
      props.updatePasswordErrorText(
        "Password should be atleast 6 characters long!"
      );
    } else {
      props.handleSignUpApi(
        { user_email: mobNo, user_password: passValue },
        { history: props.history }
      );
    }
  };

  return (
    <div className="root_login">
      <Header headerTitle="Create an Account" />
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

        <div className="btn_login" onClick={handleSignupClick}>
          Register
        </div>
        <div className="txt_footer">
          Already have an account?{" "}
          <span onClick={navigateToLoginScreen}>Sign In</span>
        </div>
      </div>
      <div className="txt_iconcredits">
        Favicon and Cursor Mask Icon made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
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
  )(SignUp)
);
