import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StationeryComponent from './StationeryComponent';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const MainComponent = (props) => {
    const {user} = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
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
                                onClick={handleMenu}
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
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                onChange={()=>{}}
                aria-label="disabled tabs example"
            >
                <Tab label="Stationery" />
                <Tab label="History" />
            </Tabs>
            <StationeryComponent />
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        user:state.auth.user
    }
}

export default connect(
    mapStateToProps
)(MainComponent);
