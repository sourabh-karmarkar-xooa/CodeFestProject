import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {getInventory} from '../actions/stationery';
import SelectedItemComponent from './SelectedItemComponent';


class StationeryComponent extends React.Component {

    componentDidMount() {
        const {getInventory} = this.props;
        getInventory();
    }

    render(){
            // const {inventories} = this.props;
            return  (
                <React.Fragment>
                    <CssBaseline />
                    <Container fixed>
                        <Grid container spacing={3}>
                            <Grid item xs={9}>
                                <Paper>
                                    Items....
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <SelectedItemComponent />
                            </Grid>
                        </Grid>

                    </Container>
                </React.Fragment>
            );
    }

}

const mapStateToProps = (state) => {
    return {
        inventories:state.stationery.stationeryInventory
    }
}

export default connect(
    mapStateToProps,
    {
        getInventory
    }
)(StationeryComponent);
