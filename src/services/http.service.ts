import { getPersistedUserObject } from './auth.service';

export interface HttpRequest {
    endpoint: string;
    method?: string;
    body?: any;
}

export default class HttpService {
    static get = (endpoint: string, signal: AbortSignal) => this._makeFetchRequest(endpoint, 'GET', signal);
    static put = (endpoint: string, data: any, signal: AbortSignal) => this._makeFetchRequest(endpoint, 'PUT', signal, data);
    static post = (endpoint: string, data: any, signal: AbortSignal) => this._makeFetchRequest(endpoint, 'POST', signal, data);
    static delete = (endpoint: string, signal: AbortSignal) => this._makeFetchRequest(endpoint, 'DELETE', signal);

    static _makeFetchRequest(url: string, method: string, signal: AbortSignal, data: any | boolean = false) {
        const userToken = getPersistedUserObject().token;
        const addToken = Boolean(userToken);

        const options: any = {
            method: method,
            mode: 'cors',
            signal
        };
        if (addToken) {
            options.headers = { ...options.headers, Authorization: 'Bearer ' + userToken };
        }
        if (data) {
            options.body = JSON.stringify(data);
        }

        return fetch(url, options).then(response => response.json());
    }
}
