import React, { Component } from "react";
import { withRouter } from "react-router";
import {connect} from "react-redux";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Hidden
} from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import {
    validateLoginCredentials,
  } from "../actions/login";

const styles = theme => ({
  root: {
    flexGrow: 1

    // backgroundColor: "white"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: "white",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "50%",
      marginTop: "6%",
      backgroundColor: "#f5f5f0"
    }
  },
  cssLabel: {
    "&$cssFocused": {
      color: theme.palette.primary.main
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: theme.palette.primary.main
    }
  },
  button: {
    "&$disabled": {
      background: "linear-gradient(to right, #0000001f 0%, #0000001f 100%)"
    },
    margin: theme.spacing.unit,
    paddingLeft: 20,
    paddingRight: 20,
    height: 46,
    width: 186,
    marginBottom: 30,
    borderRadius: 23,
    textTransform: "Capitalize",
    background: "linear-gradient(to right, #11aeaf 0%, #57ffe8 100%)",
    fontWeight: "bold"
  },
  disabled: {}, 
  textField: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "4%",
      width: 300
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300
    }
  },

  [theme.breakpoints.down("sm")]: {},
  main: {
    width: "100%",
    height: "100%",
    paddingTop: 120,
    marginLeft: 0,
    marginRight: 0,

    [theme.breakpoints.up("sm")]: {
      width: "100%",
      backgroundColor: "white"
    }
  },
  imgStyle: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "235px",
      // marginLeft: "3%",
      // marginRight: "5%",
      backgroundColor: "white",
      marginTop: "-20%",
      marginBottom: "-4%"
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "30%",
      marginTop: "8%"
    }
  }
});

export class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      userPassword: "",
      passwordVisibility: false
    };
  }

  state = {
    loginEmail: "",
    loginPassword: "",
    passwordVisibility: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ passwordVisibility: !this.state.passwordVisibility });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.root}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={4}>
              <img src="/assets/inventory-management.png" className={classes.imgStyle} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <Grid
                  container
                  spacing={24}
                  direction="column"
                  alignItems="center"
                >
                  <Grid container item xs={12} alignSelf="end">
                    <Hidden xsDown>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{
                          marginTop: "1em",
                          marginLeft: "2em",
                          color:"#11aeaf"
                        }}
                      >
                        Login
                      </Typography>
                    </Hidden>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={this.handleChange}
                      name="loginEmail"
                      required
                      id="userEmail"
                      label="Email"
                      className={classes.textField}
                      margin="normal"
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                          underline: classes.cssUnderline
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          underline: classes.cssUnderline
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: -25 }}>
                    <TextField
                      onChange={this.handleChange}
                      name="loginPassword"
                      type={this.state.passwordVisibility ? "text" : "password"}
                      required
                      id="password"
                      label="Password"
                      className={classes.textField}
                      margin="normal"
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                          underline: classes.cssUnderline
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          underline: classes.cssUnderline
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowPassword}
                            >
                              {this.state.passwordVisibility ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      direction: "row",
                      alignContent: "center",
                      marginRight: 141,
                      marginTop: -26
                    }}
                  >
                   
                  </div>
                  <Button
                    onClick={() =>
                      this.props.validateLoginCredentials(
                        this.state,
                        this.props.history.push
                      )
                    }
                    id="login"
                    type="button"
                    variant="contained"
                    color="primary"
                    classes={{
                      root: classes.button,
                      disabled: classes.disabled
                    }}
                    className={classes.button}
                    disabled={
                      !(this.state.loginEmail && this.state.loginPassword)
                    }
                  >
                    <Typography
                      style={{
                        color: "black",
                        paddingLeft: 20,
                        paddingRight: 20,
                        textTransform: "capitalize",
                        fontWeight: "bold"
                      }}
                    >
                      Login
                    </Typography>
                  </Button>
                  <Typography>
                    {/* <Link
                      onClick={() => {
                        this.props.history.push("password/forgot");
                      }}
                    >
                      Forgot Password?{" "}
                    </Link>{" "}
                  */}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
    return {
      validateLoginCredentials: (loginCredentials, historyPush) => {
        dispatch(validateLoginCredentials(loginCredentials, historyPush))
      }
    }
}


// export default withStyles(styles)(withRouter(LoginComponent));

  export default withStyles(styles)(connect(null,
    mapDispatchToProps
)(withRouter(LoginComponent)));
