import axios from 'axios';
import { createUrl } from './utils';

export async function registerUser(username, email, password_hash) {
    const url = createUrl('/user/register');
    const body = {
        username,
        email,
        password_hash
    }
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch(error) {
        return {status: 'error', error: error.message};
    }
}

export async function loginUser(email, password_hash) {
    const url = createUrl('/user/login');
    const body = {
        email,
        password_hash
    }
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch(error) {
        return {status: 'error', error: error.message};
    }
}