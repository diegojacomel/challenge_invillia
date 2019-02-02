// Modules
import axios from 'axios';

// Constants
import { BASE_URL } from './constants';

let instance = axios.create({
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

class Api {
    static get(uri) {
        return instance.get(`${BASE_URL}${uri}`);
    }

    static post(uri, data) {
        return instance.post(`${BASE_URL}${uri}`, data);
    }

    static put(uri, data) {
        return instance.put(`${BASE_URL}${uri}`, data);
    }

    static patch(uri, data) {
        return instance.patch(`${BASE_URL}${uri}`, data);
    }

    static delete(uri) {
        return instance.delete(`${BASE_URL}${uri}`);
    }
}

export default Api;