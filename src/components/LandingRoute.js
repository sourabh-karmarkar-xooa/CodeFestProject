import React from 'react';
import {connect} from "react-redux";
import {
    Route
} from "react-router-dom";
import MainComponent from '../components/MainComponent';
import LoginComponent from '../components/LoginComponent';

class LandingRoute extends React.Component {

    render(){
        const {user} = this.props;
        return <Route path="/" render={()=>{
            return user ? <MainComponent /> : <LoginComponent />
        }} />
    }

}


const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(
    mapStateToProps
)(LandingRoute);
