import axios from 'axios';

export const FETCH_USERS = 'fetch_user';
const ROOT_URL = 'http://localhost:8888/api/users';

export function fetchUsers() {

    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_USERS,
        payload: request
    };
}

