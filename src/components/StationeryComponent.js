import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {getInventory} from '../actions/stationery';
import SelectedItemComponent from './SelectedItemComponent';
import StationeryCategeoryComponent from './StationeryCategeoryComponent';
import _ from 'lodash';


class StationeryComponent extends React.Component {

    componentDidMount() {
        const {getInventory} = this.props;
        getInventory();
    }

    getCategoryData = () =>{
        const {inventories} = this.props;
        const categoryData = {};
        _.each(inventories,(inventory)=>{
                if(!categoryData[inventory.category]){
                    categoryData[inventory.category] = [];
                }
                categoryData[inventory.category].push(inventory);
        });
        return categoryData;
    }



    render(){
            const categoryData = this.getCategoryData();
            return  (
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <Grid container spacing={3}>
                            <Grid item xs={9}>
                                <Paper style={{margin:10,padding:10}}>
                                    {
                                        _.map(_.keys(categoryData),(category)=>
                                            <StationeryCategeoryComponent key={category}
                                                                          category={
                                                                              {
                                                                                  name:category,
                                                                                  items:categoryData[category]
                                                                              }
                                                                          }/>
                                        )
                                    }
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
