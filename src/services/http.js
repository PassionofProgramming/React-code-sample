import axios from 'axios';
// import { } from "react-native"

export class HttpService {
    //Get request HTTP service
    static get(url, headers = {}) {
        return axios({
            url,
            method: 'GET',
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    //Post request HTTP service
    static post(url, data, headers = { 'Content-Type': 'application/json'}
) {
        return axios({
            url,
            method: 'POST',
            data,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    static put(url, data, headers = { 'Content-Type': 'application/json'}
) {
        return axios({
            url,
            method: 'PUT',
            data,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
}