import React from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StationeryComponent from './StationeryComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = {
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
};

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            anchorEl: null
        }
    }


    setAnchorEl = (anchorEl) => {
        this.setState({anchorEl});
    }

    handleMenu = event => {
        this.setAnchorEl(event.currentTarget);
    };

    handleClose = () => {
        this.setAnchorEl(null);
    };

    onTabChange = (event, newValue, history) => {
        this.setState({value: newValue});

    }

    render() {
        const {anchorEl, value} = this.state;
        const open = Boolean(anchorEl);

        const {user, classes} = this.props;
        return (
            <div className={classes.root}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                ADIOS Paper Work
                            </Typography>
                            {user && (
                                <div>
                                    <div>
                                        <span>Yogesh Patel</span>
                                        <IconButton
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={this.handleMenu}
                                            color="inherit"
                                        >
                                            <img src={user.photo} style={{
                                                height: 32,
                                                width: 32,
                                                border: '2px solid #FFFFFF',
                                                borderRadius: 32
                                            }}/>
                                        </IconButton>
                                    </div>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={this.handleClose}
                                    >
                                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    </Menu>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                    <Tabs
                        style={{marginTop: 60, float: 'right'}}
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={(evt, newVal) => this.onTabChange(evt, newVal)}
                        aria-label="disabled tabs example"

                    >
                        <Tab label={<Link to="/" style-={{textDecoration: 'none'}}>Stationery</Link>}/>
                        <Tab label={<Link to="/history">History</Link>}/>
                    </Tabs>

                    <Switch>
                        <Route exact path="/">
                            <StationeryComponent/>
                        </Route>
                        <Route path="/history">
                            <div>History</div>
                        </Route>
                    </Switch>

            </div>
        );
    }


}


const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default withStyles(useStyles)(connect(
    mapStateToProps
)(MainComponent));
