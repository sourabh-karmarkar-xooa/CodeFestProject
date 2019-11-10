import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import withStyles from "@material-ui/core/es/styles/withStyles";
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class SelectedItemComponent extends React.Component {

    onBtnClick = () =>{

    };

    render(){
        const {classes, selectedItems, stationeryInventory} = this.props;
        const selectedItemsIDs = _.keys(selectedItems);
        return <Paper style={{margin:10,padding:10, height:'100%'}}>
            {
                !selectedItemsIDs.length ?
                    <Typography variant="h5" component="h3" style={{textAlign: "center"}}>
                        No Item Selected
                    </Typography>
                    :
                    <List dense={true}>
                        {
                            _.map(selectedItemsIDs, (id)=> {
                                const items = _.filter(stationeryInventory, (inventory) => {
                                    return inventory.id == id
                                });
                                let label = "";
                                if(items.length){
                                    label = items[0].label
                                }
                                return <ListItem>
                                    <ListItemText
                                        primary= {label}
                                        secondary={selectedItems[id]}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>

                            })
                        }
                    </List>
            }

            <Button
                    variant="contained"
                    disabled = {!selectedItemsIDs.length}
                    fullWidth
                    color={ "secondary"}
                    className={classes.button}
                    onClick={ () => this.onBtnClick()}
            >
                SEND REQUEST
            </Button>
        </Paper>
    }
}

const mapStateToProps = (state) => {
    return {
        selectedItems: state.stationery.selectedItems,
        stationeryInventory: state.stationery.stationeryInventory
    }
};


export default withStyles(styles)(connect(
    mapStateToProps,
)(SelectedItemComponent));
