import { getPersistedUserObject } from './auth.service';

export interface HttpRequest {
    endpoint: string;
    method?: string;
    body?: any;
}

export default class HttpService {
    static get = (endpoint: string) => this._makeFetchRequest(endpoint, 'GET');
    static put = (endpoint: string, data: any) => this._makeFetchRequest(endpoint, 'PUT', data);
    static post = (endpoint: string, data: any) => this._makeFetchRequest(endpoint, 'POST', data);
    static delete = (endpoint: string) => this._makeFetchRequest(endpoint, 'DELETE');

    static _makeFetchRequest(url: string, method: string, data: any | boolean = false) {
        const userToken = getPersistedUserObject().token;
        const addToken = Boolean(userToken);

        const options: any = {
            method: method,
            mode: 'cors',
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
