import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import {onCurrentlySelectedItemChanged} from "../actions/stationery";

const useStyles = {
    card: {
        maxWidth: 345,
        cursor:'pointer',
        position: 'relative'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    margin:{
        margin: 10
    },
    textField: {
        position:'absolute',
        bottom:-10,
        width: '100%',
    },
};

class StationeryItemComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected:false
        }
    }

    onItemSelected = () => {
        const {item} = this.props;
        this.props.onCurrentlySelectedItemChanged(item);
    }

    render(){

        const {classes,item,currentlySelectedItem,selectedItems} = this.props;
        let selectedBorder = 1;
        let selectedQty = 0;
        if(currentlySelectedItem && currentlySelectedItem.id === item.id){
            selectedBorder = 0.2;
        }
        if(selectedItems && selectedItems[item.id]){
            selectedQty = selectedItems[item.id];
        }
        return (
            <Card className={classes.card} onClick={this.onItemSelected}>
                <CardHeader
                    action={
                        <Badge className={classes.margin} badgeContent={selectedQty} color="secondary">
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        </Badge>
                    }
                    title={item.label}
                />
                <CardMedia
                    style={{opacity:selectedBorder}}
                    className={classes.media}
                    image={item.imageURL}
                    title={item.label}
                />
                {
                    selectedBorder !== 1 && <TextField
                        fullWidth
                        id="outlined-basic"
                        className={classes.textField}
                        label="Quantity"
                        margin="normal"
                        type="number"
                        variant="filled"
                    />
                }
            </Card>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        selectedItems:state.stationery.selectedItems,
        currentlySelectedItem:state.stationery.currentlySelectedItem
    }
}

export default connect(
    mapStateToProps,
    {
        onCurrentlySelectedItemChanged
    }
)(withStyles(useStyles)(StationeryItemComponent));
