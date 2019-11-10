import {
    VALIDATING_LOGIN_CREDENTIALS,
    USER_DETAILS_TO_REDUX}  from '../constant';

    //fetching login details from api and dispatching result to redux 
    export const validateLoginCredentials = (loginCredentials,historyPush) => {
        return dispatch => {
            console.log(loginCredentials)
          historyPush("/stationery")
        
            };
      };
      