import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser( values ) {
    const { email, password } = values;
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then( response => {
                // update state to indicate user is authenticated
                dispatch( { type: AUTH_USER });
                // save the JWT
                // redirect to the route
                browserHistory.push('./feature');
            })
            .catch()
    }
}