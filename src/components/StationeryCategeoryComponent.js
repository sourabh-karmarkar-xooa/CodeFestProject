import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import StationeryItemComponent from './StationeryItemComponent';
import _ from 'lodash';

const useStyles = {
    root: {
        flexGrow: 1,
    },
    itemRoot:{
        flexGrow: 1,
        paddingTop:15
    },
    title: {
        flexGrow: 1,
    }
};

class StationeryCategeoryComponent extends React.Component {

    render(){
        const {category,classes} = this.props;
        return (
            <div style={{width: '100%',marginTop:10}}>
                <Typography variant="h5" className={classes.title}>
                    {category.name}
                </Typography>
                <Divider />
                <Grid container className={classes.itemRoot} spacing={2}>
                    {
                        _.map(category.items,(item)=>{
                            return <Grid item xs={3} key={item.id}>
                                <StationeryItemComponent item={item} />
                            </Grid>
                        })
                    }

                </Grid>
            </div>
        )
    }
}

export default withStyles(useStyles)(StationeryCategeoryComponent);
