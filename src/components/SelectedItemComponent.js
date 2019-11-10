import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";

class SelectedItemComponent extends React.Component {

    render(){
        return <Paper>
            <Typography variant="h5" component="h3">
                No Item Selected
            </Typography>
        </Paper>
    }
}

const mapStateToProps = (state) => {
    return {
        selectedItems: state.stationery.selectedItems
    }
}

export default connect(
    mapStateToProps
)(SelectedItemComponent);
