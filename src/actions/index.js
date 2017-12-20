import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser( values ) {
    const { email, password } = values;
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, {email, password})
    }
}